import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { StatCard } from "@/public/constants/mockData";
import { ArrowUpIcon, ArrowDownIcon, MinusIcon } from "lucide-react";

interface StatsCardProps {
  stat: StatCard;
  className?: string;
}

export function StatsCard({ stat, className }: StatsCardProps) {
  const { title, value, change, trend, icon: Icon, color } = stat;

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all hover:shadow-md",
        className
      )}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>

            <div className="flex items-center mt-2 text-sm">
              {trend === "up" && (
                <span className="text-emerald-500 flex items-center mr-1">
                  <ArrowUpIcon className="h-3 w-3 mr-1" />
                  {change}
                </span>
              )}
              {trend === "down" && (
                <span className="text-red-500 flex items-center mr-1">
                  <ArrowDownIcon className="h-3 w-3 mr-1" />
                  {change}
                </span>
              )}
              {trend === "neutral" && (
                <span className="text-muted-foreground flex items-center mr-1">
                  <MinusIcon className="h-3 w-3 mr-1" />
                  {change}
                </span>
              )}
              <span className="text-muted-foreground">vs last month</span>
            </div>
          </div>

          <div className={cn("p-3 rounded-full", color)}>
            <Icon className="h-5 w-5" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
