"use client";

import React, { useState } from 'react';
import { SideNav } from './side-nav';
import { Header } from './header';
import { cn } from '@/lib/utils';

interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  return (
    <div className="min-h-screen bg-background">
      <SideNav
        className={cn("transition-all duration-300")}
      />
      <div
        className={cn(
          "flex flex-col transition-all duration-300",
          isCollapsed ? "md:ml-16" : "md:ml-64"
        )}
      >
        <Header collapsed={isCollapsed} />
        <main className="flex-1 p-4 sm:p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
}