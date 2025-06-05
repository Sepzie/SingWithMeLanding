import { initializeApp } from 'firebase/app';
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
import { getFunctions, httpsCallable } from 'firebase/functions';

const firebaseConfig = {
  // These should be replaced with your actual Firebase config
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Initialize Firebase Functions
const functions = getFunctions(app);

// Auth functions
export const signInWithEmail = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signInWithGoogle = async () => {
  return signInWithPopup(auth, googleProvider);
};

export const resetPassword = async (email: string) => {
  return sendPasswordResetEmail(auth, email);
};

export const deleteUserAccount = async () => {
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