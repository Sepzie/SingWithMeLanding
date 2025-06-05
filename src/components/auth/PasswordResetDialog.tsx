'use client';

import * as React from 'react';
import { useState } from 'react';
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
import { resetPassword } from '@/lib/firebase';
import { authContent } from '@/lib/data';

interface PasswordResetDialogProps {
  children: React.ReactNode;
  onResetSent?: () => void;
}

export function PasswordResetDialog({ children, onResetSent }: PasswordResetDialogProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await resetPassword(email);
      setSuccess(true);
      onResetSent?.();
    } catch (error: unknown) {
      console.error('Password reset failed:', error);
      let errorMessage = authContent.passwordReset.errors.sendFailed;
      
      if (error && typeof error === 'object' && 'code' in error) {
        const firebaseError = error as { code: string };
        if (firebaseError.code === 'auth/user-not-found') {
          errorMessage = authContent.passwordReset.errors.userNotFound;
        } else if (firebaseError.code === 'auth/invalid-email') {
          errorMessage = authContent.passwordReset.errors.invalidEmail;
        } else if (firebaseError.code === 'auth/too-many-requests') {
          errorMessage = authContent.passwordReset.errors.tooManyRequests;
        }
      }
      
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const resetDialog = () => {
    setEmail('');
    setError(null);
    setSuccess(false);
  };

  const handleClose = () => {
    setOpen(false);
    // Reset after a slight delay to avoid visual glitch
    setTimeout(resetDialog, 200);
  };

  return (
    <Dialog open={open} onOpenChange={(newOpen) => {
      if (!newOpen) {
        handleClose();
      } else {
        setOpen(true);
      }
    }}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{authContent.passwordReset.title}</DialogTitle>
          <DialogDescription>
            {success 
              ? authContent.passwordReset.successDescription
              : authContent.passwordReset.description
            }
          </DialogDescription>
        </DialogHeader>
        
        {success ? (
          <div className="space-y-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-md">
              <p className="text-sm text-green-800">
                {authContent.passwordReset.success.title}
              </p>
              <p className="text-sm text-green-700 mt-2">
                {authContent.passwordReset.success.message}
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
              <p className="text-sm text-blue-800">
                <strong>{authContent.passwordReset.success.troubleshootTitle}</strong>
              </p>
              <ul className="text-sm text-blue-700 mt-1 list-disc list-inside">
                {authContent.passwordReset.success.troubleshootItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                {error}
              </div>
            )}
            
            <form onSubmit={handlePasswordReset} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  {authContent.passwordReset.emailLabel}
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder={authContent.passwordReset.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
              
              <DialogFooter>
                <Button variant="outline" onClick={handleClose} disabled={isLoading}>
                  {authContent.passwordReset.cancelButton}
                </Button>
                <Button 
                  type="submit" 
                  disabled={isLoading || !email.trim()}
                >
                  {isLoading ? authContent.passwordReset.sendingText : authContent.passwordReset.sendButton}
                </Button>
              </DialogFooter>
            </form>
          </div>
        )}
        
        {success && (
          <DialogFooter>
            <Button onClick={handleClose}>
              {authContent.passwordReset.closeButton}
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setSuccess(false)}
            >
              {authContent.passwordReset.sendAnotherButton}
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
} 