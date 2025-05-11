"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Bell, 
  Search, 
  HelpCircle, 
  Settings,
  Mail,
  Plus
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const pathTitles: Record<string, string> = {
  '/': 'Dashboard',
  '/products': 'Products',
  '/orders': 'Orders',
  '/analytics': 'Analytics',
  '/customers': 'Customers',
  '/marketing': 'Marketing',
  '/settings': 'Settings',
  '/support': 'Help & Support',
};

interface HeaderProps {
  collapsed: boolean;
}

export function Header({ collapsed }: HeaderProps) {
  const pathname = usePathname();
  const pageTitle = pathTitles[pathname] || 'Dashboard';
  
  return (
    <header className={`h-16 border-b bg-card px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30 transition-all duration-300 ${
      collapsed ? "md:pl-20" : "md:pl-64"
    }`}>
      {/* Left - Page Title */}
      <div>
        <h1 className="text-xl font-semibold">{pageTitle}</h1>
      </div>
      
      {/* Right - Search, Notifications, Help */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        {/* Search */}
        <div className="hidden md:flex items-center relative max-w-xs">
          <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-9 w-full md:w-[200px] lg:w-[320px] h-9"
          />
        </div>
        
        {/* Add New Button */}
        <Button size="sm" className="hidden sm:flex items-center gap-1">
          <Plus className="h-4 w-4" />
          <span>Add New</span>
        </Button>
        
        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-red-500 text-white">
                3
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-80 overflow-y-auto">
              {[1, 2, 3].map((item) => (
                <DropdownMenuItem key={item} className="flex flex-col items-start py-3 cursor-pointer">
                  <div className="font-medium">New order received</div>
                  <div className="text-sm text-muted-foreground">Order #ORD-3928{item} is awaiting processing</div>
                  <div className="text-xs text-muted-foreground mt-1">10 min ago</div>
                </DropdownMenuItem>
              ))}
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center font-medium text-primary">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        {/* Messages */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Mail className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-primary text-white">
                2
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Messages</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-80 overflow-y-auto">
              {[1, 2].map((item) => (
                <DropdownMenuItem key={item} className="flex flex-col items-start py-3 cursor-pointer">
                  <div className="font-medium">Customer Support</div>
                  <div className="text-sm text-muted-foreground">Question about shipping options for international orders</div>
                  <div className="text-xs text-muted-foreground mt-1">1 hour ago</div>
                </DropdownMenuItem>
              ))}
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center font-medium text-primary">
              View all messages
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        {/* Help */}
        <Button variant="ghost" size="icon">
          <HelpCircle className="h-5 w-5" />
        </Button>
        
        {/* Settings */}
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}