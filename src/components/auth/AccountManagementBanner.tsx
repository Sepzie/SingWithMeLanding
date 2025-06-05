'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { authContent } from '@/lib/data';

export function AccountManagementBanner() {
  return (
    <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg text-blue-900">{authContent.banner.title}</CardTitle>
        <CardDescription className="text-blue-700">
          {authContent.banner.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild variant="default" size="sm">
            <Link href="/account">
              {authContent.banner.manageButton}
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/account">
              {authContent.banner.deleteButton}
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
} 