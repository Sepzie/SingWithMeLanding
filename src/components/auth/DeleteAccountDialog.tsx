'use client';

import * as React from 'react';
import { useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { auth, deleteUserAccount, reauthenticateUser } from '@/lib/firebase';
import { authContent } from '@/lib/data';

interface DeleteAccountDialogProps {
  children: React.ReactNode;
  onAccountDeleted?: () => void;
}

export function DeleteAccountDialog({ children, onAccountDeleted }: DeleteAccountDialogProps) {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmText, setConfirmText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState<'confirm' | 'reauthenticate' | 'final'>('confirm');
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const requiresPasswordReauth = user?.providerData[0]?.providerId === 'password' || user?.providerData[0]?.providerId === 'firebase';

  const handleDeleteConfirmation = () => {
    if (confirmText !== 'DELETE') {
      setError(authContent.deleteAccount.confirmStep.confirmError);
      return;
    }
    setError(null);
    setStep('reauthenticate');
  };

  const handleReauthentication = async () => {
    if (!user) return;
    
    setIsLoading(true);
    setError(null);

    try {
      // Reauthenticate user based on their provider
      if (requiresPasswordReauth) {
        if (!password) {
          setError(authContent.deleteAccount.reauthStep.passwordRequired);
          setIsLoading(false);
          return;
        }
        await reauthenticateUser(password);
      } else {
        // For Google users
        await reauthenticateUser();
      }
      
      setStep('final');
    } catch (error: any) {
      console.error('Reauthentication failed:', error);
      setError(error.message || authContent.deleteAccount.reauthStep.reauthFailed);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFinalDelete = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await deleteUserAccount();
      await signOut();
      setOpen(false);
      onAccountDeleted?.();
    } catch (error: any) {
      console.error('Account deletion failed:', error);
      setError(error.message || authContent.deleteAccount.finalStep.deleteFailed);
    } finally {
      setIsLoading(false);
    }
  };

  const resetDialog = () => {
    setStep('confirm');
    setPassword('');
    setConfirmText('');
    setError(null);
  };

  if (!user) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={(newOpen) => {
      setOpen(newOpen);
      if (!newOpen) resetDialog();
    }}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {step === 'confirm' && (
          <>
            <DialogHeader>
              <DialogTitle className="text-red-600">{authContent.deleteAccount.confirmStep.title}</DialogTitle>
              <DialogDescription>
                {authContent.deleteAccount.confirmStep.description}
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              {error && (
                <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                  {error}
                </div>
              )}
              
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                <p className="text-sm text-yellow-800">
                  <strong>{authContent.deleteAccount.confirmStep.warningTitle}</strong> {authContent.deleteAccount.confirmStep.warningText}
                </p>
                <ul className="mt-2 text-sm text-yellow-800 list-disc list-inside">
                  {authContent.deleteAccount.confirmStep.warningItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="confirm" className="text-sm font-medium">
                  {authContent.deleteAccount.confirmStep.confirmLabel}
                </label>
                <Input
                  id="confirm"
                  type="text"
                  placeholder={authContent.deleteAccount.confirmStep.confirmPlaceholder}
                  value={confirmText}
                  onChange={(e) => setConfirmText(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button 
                variant="destructive" 
                onClick={handleDeleteConfirmation}
                disabled={isLoading || confirmText !== 'DELETE'}
              >
                Continue
              </Button>
            </DialogFooter>
          </>
        )}

        {step === 'reauthenticate' && (
          <>
            <DialogHeader>
              <DialogTitle>Confirm Your Identity</DialogTitle>
              <DialogDescription>
                For security, please confirm your identity before deleting your account.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              {error && (
                <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                  {error}
                </div>
              )}
              
              {requiresPasswordReauth ? (
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">
                    Enter your password:
                  </label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
              ) : (
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
                  <p className="text-sm text-blue-800">
                    You'll be prompted to sign in with Google to confirm your identity.
                  </p>
                </div>
              )}
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setStep('confirm')}>
                Back
              </Button>
              <Button 
                onClick={handleReauthentication}
                disabled={isLoading || (requiresPasswordReauth && !password)}
              >
                {isLoading ? 'Confirming...' : 'Confirm Identity'}
              </Button>
            </DialogFooter>
          </>
        )}

        {step === 'final' && (
          <>
            <DialogHeader>
              <DialogTitle className="text-red-600">Final Confirmation</DialogTitle>
              <DialogDescription>
                You have been reauthenticated. Click the button below to permanently delete your account.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              {error && (
                <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                  {error}
                </div>
              )}
              
              <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-sm text-red-800 font-medium">
                  Last chance! This action cannot be undone.
                </p>
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setStep('reauthenticate')}>
                Back
              </Button>
              <Button 
                variant="destructive" 
                onClick={handleFinalDelete}
                disabled={isLoading}
              >
                {isLoading ? 'Deleting Account...' : 'Delete My Account'}
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
} 