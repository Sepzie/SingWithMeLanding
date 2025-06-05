'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function AccountManagementBanner() {
  return (
    <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg text-blue-900">Account Management</CardTitle>
        <CardDescription className="text-blue-700">
          Need to manage your SingWithMe account? You can sign in, reset your password, or delete your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild variant="default" size="sm">
            <Link href="/account">
              Manage Account
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/account">
              Delete Account
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
} 