import { initializeApp, FirebaseApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  reauthenticateWithCredential,
  reauthenticateWithPopup,
  EmailAuthProvider
} from 'firebase/auth';
import { getFunctions, httpsCallable, Functions } from 'firebase/functions';
import { getFirestore, Firestore } from 'firebase/firestore';

const firebaseConfig = {
  // These should be replaced with your actual Firebase config
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Validate Firebase configuration
const isValidFirebaseConfig = Object.values(firebaseConfig).every(value => value && value !== '');

// Create a minimal config for build time
const fallbackConfig = {
  apiKey: "demo-key",
  authDomain: "demo.firebaseapp.com",
  projectId: "demo-project",
  storageBucket: "demo.appspot.com",
  messagingSenderId: "123456789",
  appId: "demo-app-id"
};

// Initialize Firebase with proper config or fallback
let app: FirebaseApp;
let functions: Functions | undefined;

if (typeof window !== 'undefined' && isValidFirebaseConfig) {
  // Client-side with valid config
  app = initializeApp(firebaseConfig);
  functions = getFunctions(app);
} else if (typeof window !== 'undefined') {
  // Client-side with invalid config
  console.warn('Firebase configuration is incomplete. Auth features will not work.');
  app = initializeApp(fallbackConfig);
} else {
  // Server-side (build time)
  app = initializeApp(fallbackConfig);
}

// Always export a valid auth object
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Initialize Firestore
export const db = getFirestore(app);

// Auth functions with proper validation
export const signInWithEmail = async (email: string, password: string) => {
  if (!isValidFirebaseConfig) throw new Error('Firebase configuration is incomplete');
  return signInWithEmailAndPassword(auth, email, password);
};

export const signInWithGoogle = async () => {
  if (!isValidFirebaseConfig) throw new Error('Firebase configuration is incomplete');
  return signInWithPopup(auth, googleProvider);
};

export const resetPassword = async (email: string) => {
  if (!isValidFirebaseConfig) throw new Error('Firebase configuration is incomplete');
  return sendPasswordResetEmail(auth, email);
};

export const deleteUserAccount = async () => {
  if (!isValidFirebaseConfig || !functions) throw new Error('Firebase not properly configured');
  const user = auth.currentUser;
  if (!user) {
    throw new Error('No user is currently signed in');
  }
  
  // Call your Cloud Function for account deletion
  const deleteUserFunction = httpsCallable(functions, 'deleteUserAccount');
  
  try {
    const result = await deleteUserFunction();
    return result;
  } catch (error) {
    console.error('Error calling deleteUserAccount function:', error);
    throw error;
  }
};

export const reauthenticateUser = async (password?: string) => {
  if (!isValidFirebaseConfig) throw new Error('Firebase configuration is incomplete');
  const user = auth.currentUser;
  if (!user) {
    throw new Error('No user is currently signed in');
  }

  // If password is provided, use email/password reauthentication
  if (password && user.email) {
    const credential = EmailAuthProvider.credential(user.email, password);
    return reauthenticateWithCredential(user, credential);
  } 
  
  // Check if user signed in with Google
  const providerId = user.providerData[0]?.providerId;
  if (providerId === 'google.com') {
    return reauthenticateWithPopup(user, googleProvider);
  }
  
  throw new Error('Unable to determine reauthentication method');
};

export default app; 