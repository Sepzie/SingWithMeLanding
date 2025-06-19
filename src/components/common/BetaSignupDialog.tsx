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
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
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
    newsletter: true
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const { betaSignup } = siteContent.downloadButtons;
  const platformContent = betaSignup.platformSpecific[platform];

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
      // Use email as document ID to naturally handle duplicates
      const emailDocId = formData.email.toLowerCase().replace(/[^a-zA-Z0-9]/g, '_');
      const docRef = doc(db, 'email_list', emailDocId);
      
      // Create base document data
      const baseData = {
        name: formData.name,
        email: formData.email.toLowerCase(),
        beta_tester: true,
        newsletter: formData.newsletter,
        updated_at: serverTimestamp()
      };

      // Set the specific platform field and merge with existing data
      const platformField = `platform.${platform}`;
      await setDoc(docRef, {
        ...baseData,
        [platformField]: true,
        created_at: serverTimestamp() // Only sets if document doesn't exist
      }, { merge: true });

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
          <DialogTitle className="flex items-center gap-3">
            {platform === 'apple' ? (
              <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            ) : (
              <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
            )}
            {platformContent.title}
          </DialogTitle>
          <DialogDescription>
            {platformContent.description}
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
                {isLoading ? platformContent.submittingText : platformContent.submitButton}
              </Button>
            </DialogFooter>
          </form>
        ) : (
          <div className="space-y-4 text-center">
            <h3 className="text-lg font-semibold text-green-600">
              {betaSignup.success.title}
            </h3>
            <p className="text-gray-600">
              {platformContent.successDescription}
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