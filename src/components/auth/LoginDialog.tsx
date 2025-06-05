'use client';

import * as React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
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
import { auth, signInWithEmail, signInWithGoogle } from '@/lib/firebase';
import { authContent } from '@/lib/data';

interface LoginDialogProps {
  children: React.ReactNode;
  onLoginSuccess?: () => void;
}

export function LoginDialog({ children, onLoginSuccess }: LoginDialogProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user] = useAuthState(auth);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await signInWithEmail(email, password);
      setOpen(false);
      onLoginSuccess?.();
    } catch (error: any) {
      setError(error.message || authContent.login.errors.signInFailed);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await signInWithGoogle();
      setOpen(false);
      onLoginSuccess?.();
    } catch (error: any) {
      setError(error.message || authContent.login.errors.signInGoogleFailed);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setError(null);
  };

  if (user) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={(newOpen) => {
      setOpen(newOpen);
      if (!newOpen) resetForm();
    }}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{authContent.login.title}</DialogTitle>
          <DialogDescription>
            {authContent.login.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {error && (
            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
              {error}
            </div>
          )}
          
          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                {authContent.login.emailLabel}
              </label>
              <Input
                id="email"
                type="email"
                placeholder={authContent.login.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                {authContent.login.passwordLabel}
              </label>
              <Input
                id="password"
                type="password"
                placeholder={authContent.login.passwordPlaceholder}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading}
            >
              {isLoading ? authContent.login.signingInText : authContent.login.signInEmailButton}
            </Button>
          </form>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                {authContent.login.orContinueWith}
              </span>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={handleGoogleLogin}
            disabled={isLoading}
          >
            {isLoading ? authContent.login.signingInText : authContent.login.signInGoogleButton}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 