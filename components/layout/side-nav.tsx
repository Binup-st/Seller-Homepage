"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  BarChart3,
  Users,
  Gift,
  Settings,
  HelpCircle,
  Menu,
  X,
  ChevronRight,
  Home,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
  },
  {
    title: "Products",
    href: "/products",
    icon: <Package className="mr-2 h-4 w-4" />,
    badge: "5",
  },
  {
    title: "Orders",
    href: "/orders",
    icon: <ShoppingBag className="mr-2 h-4 w-4" />,
    badge: "3",
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: <BarChart3 className="mr-2 h-4 w-4" />,
  },
  {
    title: "Customers",
    href: "/customers",
    icon: <Users className="mr-2 h-4 w-4" />,
  },
  {
    title: "Marketing",
    href: "/marketing",
    icon: <Gift className="mr-2 h-4 w-4" />,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: <Settings className="mr-2 h-4 w-4" />,
  },
  {
    title: "Help & Support",
    href: "/support",
    icon: <HelpCircle className="mr-2 h-4 w-4" />,
  },
];

interface SideNavProps {
  className?: string;
}

export function SideNav({ className }: SideNavProps) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <aside className="fixed top-0 bottom-0 left-0 z-40 w-64 border-r bg-card hidden md:block" />
    );
  }

  return (
    <>
      {/* Mobile Menu Trigger Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-opacity",
          isMobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 bottom-0 left-0 z-40 border-r bg-card text-card-foreground",
          "transition-all duration-300 ease-in-out",
          isCollapsed ? "md:w-16" : "md:w-64",
          isMobileOpen
            ? "w-64 flex flex-col"
            : "w-0 hidden md:flex md:flex-col",
          className
        )}
      >
        {/* Collapse Toggle Button (Desktop only) */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-4 top-4 h-8 w-8 rounded-full border shadow-md hidden md:flex"
          aria-label={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          <ChevronRight
            className={cn(
              "h-4 w-4 transition-transform",
              isCollapsed ? "" : "rotate-180"
            )}
          />
        </Button>

        {/* Logo Area */}
        <div
          className={cn(
            "h-16 flex items-center px-4 border-b",
            isCollapsed ? "justify-center" : "justify-start"
          )}
        >
          {isCollapsed ? (
            <Home className="h-6 w-6 text-primary" />
          ) : (
            <div className="flex items-center">
              <Home className="h-6 w-6 text-primary mr-2" />
              <span className="font-bold text-xl">Colour</span>
            </div>
          )}
        </div>

        {/* Nav Items */}
        <ScrollArea className="flex-1 py-2">
          <nav className="flex flex-col gap-1 px-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className={cn(
                  "group flex items-center px-2 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-primary/10 text-primary hover:bg-primary/20"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {item.icon}
                {(!isCollapsed || isMobileOpen) && (
                  <span className="flex-1">{item.title}</span>
                )}
                {item.badge && (!isCollapsed || isMobileOpen) && (
                  <span className="ml-auto inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </ScrollArea>

        {/* User Profile */}
        <div
          className={cn(
            "mt-auto p-4 border-t flex items-center",
            isCollapsed ? "justify-center" : "justify-start"
          )}
        >
          <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
            <span className="text-xs font-medium">JS</span>
          </div>
          {(!isCollapsed || isMobileOpen) && (
            <div className="ml-3">
              <p className="text-sm font-medium">Jane Smith</p>
              <p className="text-xs text-muted-foreground">Store Owner</p>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
