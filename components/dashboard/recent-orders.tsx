import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";
import { orders } from "@/public/constants/mockData";

export function RecentOrders() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "processing":
        return (
          <Badge
            variant="outline"
            className="bg-blue-50 text-blue-600 hover:bg-blue-50 border-blue-200"
          >
            Processing
          </Badge>
        );
      case "shipped":
        return (
          <Badge
            variant="outline"
            className="bg-amber-50 text-amber-600 hover:bg-amber-50 border-amber-200"
          >
            Shipped
          </Badge>
        );
      case "delivered":
        return (
          <Badge
            variant="outline"
            className="bg-emerald-50 text-emerald-600 hover:bg-emerald-50 border-emerald-200"
          >
            Delivered
          </Badge>
        );
      case "cancelled":
        return (
          <Badge
            variant="outline"
            className="bg-red-50 text-red-600 hover:bg-red-50 border-red-200"
          >
            Cancelled
          </Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <Card className="border shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-bold">Recent Orders</CardTitle>
        <Button variant="ghost" size="sm" className="gap-1 text-primary">
          View All
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-12 text-xs font-medium text-muted-foreground py-1">
            <div className="col-span-3">Order</div>
            <div className="col-span-3">Customer</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-1 text-right">Total</div>
            <div className="col-span-1"></div>
          </div>

          {orders.map((order) => (
            <div
              key={order.id}
              className="grid grid-cols-12 items-center py-3 text-sm border-b last:border-0"
            >
              <div className="col-span-3 font-medium">{order.orderNumber}</div>
              <div className="col-span-3">{order.customer}</div>
              <div className="col-span-2 text-muted-foreground">
                {order.date}
              </div>
              <div className="col-span-2">{getStatusBadge(order.status)}</div>
              <div className="col-span-1 text-right">
                ${order.total.toFixed(2)}
              </div>
              <div className="col-span-1 text-right">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
