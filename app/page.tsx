import React from 'react';
import { SalesChart } from '@/components/dashboard/sales-chart';
import { RecentOrders } from '@/components/dashboard/recent-orders';
import { ProductList } from '@/components/dashboard/product-list';
import { StatsCard } from '@/components/dashboard/stats-card';
import { dashboardStats } from '@/lib/constants/mockData';
import { RecentActivity } from '@/components/dashboard/recent-activity';
import { TopSellers } from '@/components/dashboard/top-sellers';

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Welcome and Date */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Welcome back, Jane!</h2>
          <p className="text-muted-foreground">
            Here's what's happening with your store today.
          </p>
        </div>
        <div className="bg-muted/50 rounded-lg px-4 py-2 flex flex-col items-center justify-center">
          <div className="text-muted-foreground text-sm">Today's Date</div>
          <div className="font-medium">April 12, 2025</div>
        </div>
      </div>
      
      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {dashboardStats.map((stat, index) => (
          <StatsCard key={index} stat={stat} />
        ))}
      </div>
      
      {/* Charts Row */}
      <div className="grid gap-4 md:grid-cols-2">
        <SalesChart />
        <TopSellers />
      </div>
      
      {/* Products & Orders Row */}
      <div className="grid gap-4 md:grid-cols-2">
        <RecentOrders />
        <RecentActivity />
      </div>
      
      {/* Products List */}
      <div>
        <ProductList />
      </div>
    </div>
  );
}