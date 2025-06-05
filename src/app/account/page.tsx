'use client';

import * as React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LoginDialog } from '@/components/auth/LoginDialog';
import { DeleteAccountDialog } from '@/components/auth/DeleteAccountDialog';
import { PasswordResetDialog } from '@/components/auth/PasswordResetDialog';
import { auth } from '@/lib/firebase';
import { authContent } from '@/lib/data';

export default function AccountPage() {
  const [user, loading] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const handleAccountDeleted = () => {
    // Could redirect to a success page or show a message
    console.log('Account successfully deleted');
  };

  const handlePasswordResetSent = () => {
    console.log('Password reset email sent');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-sm text-muted-foreground">{authContent.accountManagement.loading}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-2xl mx-auto py-8 px-4">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">{authContent.accountManagement.title}</h1>
            <p className="text-muted-foreground mt-2">
              {authContent.accountManagement.subtitle}
            </p>
          </div>

          {!user ? (
                         <Card>
               <CardHeader>
                 <CardTitle>{authContent.accountManagement.signInRequired.title}</CardTitle>
                 <CardDescription>
                   {authContent.accountManagement.signInRequired.description}
                 </CardDescription>
               </CardHeader>
               <CardContent className="space-y-4">
                 <LoginDialog>
                   <Button className="w-full">
                     {authContent.accountManagement.signInRequired.signInButton}
                   </Button>
                 </LoginDialog>
                 
                 <div className="relative">
                   <div className="absolute inset-0 flex items-center">
                     <span className="w-full border-t" />
                   </div>
                   <div className="relative flex justify-center text-xs uppercase">
                     <span className="bg-background px-2 text-muted-foreground">
                       {authContent.accountManagement.signInRequired.orText}
                     </span>
                   </div>
                 </div>
                 
                 <PasswordResetDialog onResetSent={handlePasswordResetSent}>
                   <Button variant="outline" className="w-full">
                     {authContent.accountManagement.signInRequired.resetPasswordButton}
                   </Button>
                 </PasswordResetDialog>
               </CardContent>
             </Card>
          ) : (
            <div className="space-y-6">
                             <Card>
                 <CardHeader>
                   <CardTitle>{authContent.accountManagement.accountInfo.title}</CardTitle>
                   <CardDescription>
                     {authContent.accountManagement.accountInfo.description}
                   </CardDescription>
                 </CardHeader>
                 <CardContent className="space-y-4">
                   <div className="space-y-2">
                     <p className="text-sm font-medium">{authContent.accountManagement.accountInfo.email}</p>
                     <p className="text-sm text-muted-foreground">{user.email}</p>
                   </div>
                   
                   <div className="space-y-2">
                     <p className="text-sm font-medium">{authContent.accountManagement.accountInfo.signInMethod}</p>
                     <p className="text-sm text-muted-foreground">
                       {user.providerData[0]?.providerId === 'google.com' ? authContent.accountManagement.accountInfo.providerGoogle : authContent.accountManagement.accountInfo.providerEmail}
                     </p>
                   </div>
                   
                   <div className="space-y-2">
                     <p className="text-sm font-medium">{authContent.accountManagement.accountInfo.accountCreated}</p>
                     <p className="text-sm text-muted-foreground">
                       {user.metadata.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : authContent.accountManagement.accountInfo.unknownDate}
                     </p>
                   </div>
                 </CardContent>
               </Card>

                             <Card>
                 <CardHeader>
                   <CardTitle>{authContent.accountManagement.accountActions.title}</CardTitle>
                   <CardDescription>
                     {authContent.accountManagement.accountActions.description}
                   </CardDescription>
                 </CardHeader>
                 <CardContent className="space-y-4">
                   <div className="space-y-2">
                     <h3 className="text-sm font-medium">{authContent.accountManagement.accountActions.passwordManagement.title}</h3>
                     <p className="text-xs text-muted-foreground">
                       {authContent.accountManagement.accountActions.passwordManagement.description}
                     </p>
                     <PasswordResetDialog onResetSent={handlePasswordResetSent}>
                       <Button 
                         variant="outline" 
                         size="sm"
                         disabled={user.providerData[0]?.providerId === 'google.com'}
                       >
                         {authContent.accountManagement.accountActions.passwordManagement.button}
                       </Button>
                     </PasswordResetDialog>
                   </div>
                   
                   <div className="border-t pt-4">
                     <div className="space-y-2">
                       <h3 className="text-sm font-medium">{authContent.accountManagement.accountActions.signOut.title}</h3>
                       <p className="text-xs text-muted-foreground">
                         {authContent.accountManagement.accountActions.signOut.description}
                       </p>
                       <Button 
                         variant="outline" 
                         size="sm"
                         onClick={() => signOut()}
                       >
                         {authContent.accountManagement.accountActions.signOut.button}
                       </Button>
                     </div>
                   </div>
                 </CardContent>
               </Card>

                             <Card className="border-red-200">
                 <CardHeader>
                   <CardTitle className="text-red-600">{authContent.accountManagement.dangerZone.title}</CardTitle>
                   <CardDescription>
                     {authContent.accountManagement.dangerZone.description}
                   </CardDescription>
                 </CardHeader>
                 <CardContent className="space-y-4">
                   <div className="space-y-2">
                     <h3 className="text-sm font-medium text-red-600">{authContent.accountManagement.dangerZone.deleteAccount.title}</h3>
                     <p className="text-xs text-muted-foreground">
                       {authContent.accountManagement.dangerZone.deleteAccount.description}
                     </p>
                     <DeleteAccountDialog onAccountDeleted={handleAccountDeleted}>
                       <Button variant="destructive" size="sm">
                         {authContent.accountManagement.dangerZone.deleteAccount.button}
                       </Button>
                     </DeleteAccountDialog>
                   </div>
                 </CardContent>
               </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 