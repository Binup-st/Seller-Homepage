import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { products } from "@/public/constants/mockData";
import { Progress } from "@/components/ui/progress";

export function ProductList() {
  return (
    <Card className="border shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-bold">Top Products</CardTitle>
        <Button variant="ghost" size="sm" className="gap-1 text-primary">
          View All
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-2 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="col-span-1 md:col-span-1">
                <div className="relative h-12 w-12 overflow-hidden rounded-md border bg-muted">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    className="object-cover"
                    fill
                    sizes="48px"
                  />
                </div>
              </div>

              <div className="col-span-1 md:col-span-5">
                <div className="font-medium">{product.name}</div>
                <div className="text-sm text-muted-foreground">
                  {product.category}
                </div>
              </div>

              <div className="col-span-1 md:col-span-2 flex items-center">
                <div className="flex items-center text-amber-500">
                  <Star className="mr-1 h-4 w-4 fill-current" />
                  <span>{product.rating}</span>
                </div>
              </div>

              <div className="col-span-1 md:col-span-2">
                <div className="font-medium">${product.price}</div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="mr-1">Stock:</span>
                  <Progress
                    value={Math.min(product.stock / 2, 100)}
                    className="h-1 w-12 bg-muted"
                  />
                  <span className="ml-1">{product.stock}</span>
                </div>
              </div>

              <div className="col-span-1 md:col-span-2 flex justify-end">
                <Badge variant={product.stock < 20 ? "destructive" : "outline"}>
                  {product.stock < 20 ? "Low Stock" : product.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
