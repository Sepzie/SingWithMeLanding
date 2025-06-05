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
    } catch (error: any) {
      console.error('Password reset failed:', error);
      let errorMessage = 'Failed to send password reset email';
      
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'No account found with this email address';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Please enter a valid email address';
      } else if (error.code === 'auth/too-many-requests') {
        errorMessage = 'Too many requests. Please try again later';
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
          <DialogTitle>Reset Your Password</DialogTitle>
          <DialogDescription>
            {success 
              ? "Check your email for password reset instructions."
              : "Enter your email address and we'll send you a link to reset your password."
            }
          </DialogDescription>
        </DialogHeader>
        
        {success ? (
          <div className="space-y-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-md">
              <p className="text-sm text-green-800">
                ✅ Password reset email sent successfully!
              </p>
              <p className="text-sm text-green-700 mt-2">
                Check your inbox and spam folder for an email from Firebase Auth. 
                Follow the instructions in the email to reset your password.
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
              <p className="text-sm text-blue-800">
                <strong>Didn't receive the email?</strong>
              </p>
              <ul className="text-sm text-blue-700 mt-1 list-disc list-inside">
                <li>Check your spam/junk folder</li>
                <li>Make sure you entered the correct email address</li>
                <li>Try again in a few minutes</li>
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
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
              
              <DialogFooter>
                <Button variant="outline" onClick={handleClose} disabled={isLoading}>
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  disabled={isLoading || !email.trim()}
                >
                  {isLoading ? 'Sending...' : 'Send Reset Email'}
                </Button>
              </DialogFooter>
            </form>
          </div>
        )}
        
        {success && (
          <DialogFooter>
            <Button onClick={handleClose}>
              Close
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setSuccess(false)}
            >
              Send Another Email
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
} 