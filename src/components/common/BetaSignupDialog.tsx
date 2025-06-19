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
import { siteContent } from '@/lib/data';
import { addDoc, collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface BetaSignupDialogProps {
  children: React.ReactNode;
  platform: 'apple' | 'android';
}

interface FormData {
  name: string;
  email: string;
  newsletter: boolean;
}

export function BetaSignupDialog({ children, platform }: BetaSignupDialogProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    newsletter: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const { betaSignup } = siteContent.downloadButtons;

  const validateForm = (): string | null => {
    if (!formData.name.trim()) {
      return betaSignup.errors.nameRequired;
    }
    if (!formData.email.trim()) {
      return betaSignup.errors.emailRequired;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return betaSignup.errors.invalidEmail;
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setIsLoading(false);
      return;
    }

    try {
      // Check if email already exists
      const emailQuery = query(
        collection(db, 'email_list'),
        where('email', '==', formData.email.toLowerCase())
      );
      const existingDocs = await getDocs(emailQuery);

      const now = new Date();
      
      if (!existingDocs.empty) {
        // Update existing document
        const existingDoc = existingDocs.docs[0];
        const existingData = existingDoc.data();
        
        await updateDoc(doc(db, 'email_list', existingDoc.id), {
          name: formData.name,
          newsletter: formData.newsletter,
          platform: {
            ...existingData.platform,
            [platform]: true
          },
          updated_at: now
        });
      } else {
        // Create new document
        await addDoc(collection(db, 'email_list'), {
          name: formData.name,
          email: formData.email.toLowerCase(),
          beta_tester: true,
          newsletter: formData.newsletter,
          platform: {
            apple: platform === 'apple',
            android: platform === 'android'
          },
          created_at: now,
          updated_at: now
        });
      }

      setIsSuccess(true);
    } catch (error: unknown) {
      console.error('Beta signup error:', error);
      if (error instanceof Error && error.message.includes('network')) {
        setError(betaSignup.errors.networkError);
      } else {
        setError(betaSignup.errors.submitFailed);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', newsletter: false });
    setError(null);
    setIsSuccess(false);
  };

  const handleClose = () => {
    setOpen(false);
    // Reset form after a short delay to avoid UI flash
    setTimeout(resetForm, 200);
  };

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
          <DialogTitle>{betaSignup.title}</DialogTitle>
          <DialogDescription>
            {betaSignup.description}
          </DialogDescription>
        </DialogHeader>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                {betaSignup.nameLabel}
              </label>
              <Input
                id="name"
                type="text"
                placeholder={betaSignup.namePlaceholder}
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                {betaSignup.emailLabel}
              </label>
              <Input
                id="email"
                type="email"
                placeholder={betaSignup.emailPlaceholder}
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
                disabled={isLoading}
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="newsletter"
                checked={formData.newsletter}
                onChange={(e) => setFormData(prev => ({ ...prev, newsletter: e.target.checked }))}
                disabled={isLoading}
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="newsletter" className="text-sm">
                {betaSignup.newsletterLabel}
              </label>
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                disabled={isLoading}
              >
                {betaSignup.cancelButton}
              </Button>
              <Button 
                type="submit" 
                disabled={isLoading}
              >
                {isLoading ? betaSignup.submittingText : betaSignup.submitButton}
              </Button>
            </DialogFooter>
          </form>
        ) : (
          <div className="space-y-4 text-center">
            <h3 className="text-lg font-semibold text-green-600">
              {betaSignup.success.title}
            </h3>
            <p className="text-gray-600">
              {betaSignup.success.description}
            </p>
            <DialogFooter>
              <Button onClick={handleClose} className="w-full">
                {betaSignup.success.closeButton}
              </Button>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
} 