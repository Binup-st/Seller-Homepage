import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { recentActivities } from "@/public/constants/mockData";

export function RecentActivity() {
  return (
    <Card className="border shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-bold">Recent Activity</CardTitle>
        <Button variant="ghost" size="sm" className="gap-1 text-primary">
          View All
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {recentActivities.map((activity) => {
            const Icon = activity.icon;

            return (
              <div key={activity.id} className="flex">
                <div className="relative mr-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  {/* Line connecting to the next item */}
                  {activity.id !==
                    recentActivities[recentActivities.length - 1].id && (
                    <div className="absolute top-9 bottom-0 left-1/2 w-px -translate-x-1/2 bg-border" />
                  )}
                </div>
                <div className="flex-1 space-y-1">
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {activity.description}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {activity.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
