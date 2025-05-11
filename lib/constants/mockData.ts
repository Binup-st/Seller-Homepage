import {
  DivideIcon as LucideIcon,
  ShoppingBag,
  BarChart3,
  Package,
  Users,
  DollarSign,
  TrendingUp,
  Calendar,
  Clock,
} from "lucide-react";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  imageUrl: string;
  status: "active" | "inactive" | "draft" | "low_stock";
  rating: number;
  sales: number;
};

export type Order = {
  id: string;
  orderNumber: string;
  customer: string;
  date: string;
  status: "processing" | "shipped" | "delivered" | "cancelled";
  total: number;
  items: number;
};

export type StatCard = {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  icon: typeof LucideIcon;
  color: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Natural Glow Foundation",
    category: "Face",
    price: 39.99,
    stock: 145,
    imageUrl:
      "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600",
    status: "active",
    rating: 4.7,
    sales: 234,
  },
  {
    id: "2",
    name: "Volumizing Mascara",
    category: "Eyes",
    price: 24.99,
    stock: 89,
    imageUrl:
      "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=600",
    status: "active",
    rating: 4.5,
    sales: 178,
  },
  {
    id: "3",
    name: "Matte Lipstick Collection",
    category: "Lips",
    price: 29.99,
    stock: 67,
    imageUrl:
      "https://images.pexels.com/photos/2533265/pexels-photo-2533265.jpeg?auto=compress&cs=tinysrgb&w=600",
    status: "active",
    rating: 4.8,
    sales: 212,
  },
  {
    id: "4",
    name: "Hydrating Face Serum",
    category: "Skincare",
    price: 54.99,
    stock: 32,
    imageUrl:
      "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600",
    status: "active",
    rating: 4.9,
    sales: 156,
  },
  {
    id: "5",
    name: "Eyeshadow Palette - Sunset",
    category: "Eyes",
    price: 44.99,
    stock: 12,
    imageUrl:
      "https://images.pexels.com/photos/2659939/pexels-photo-2659939.jpeg?auto=compress&cs=tinysrgb&w=600",
    status: "low_stock",
    rating: 4.6,
    sales: 98,
  },
];

export const orders: Order[] = [
  {
    id: "1",
    orderNumber: "ORD-39281",
    customer: "Emma Thompson",
    date: "2025-04-12",
    status: "processing",
    total: 128.97,
    items: 3,
  },
  {
    id: "2",
    orderNumber: "ORD-39280",
    customer: "Michael Davis",
    date: "2025-04-12",
    status: "processing",
    total: 54.99,
    items: 1,
  },
  {
    id: "3",
    orderNumber: "ORD-39279",
    customer: "Sophia Chen",
    date: "2025-04-11",
    status: "shipped",
    total: 94.98,
    items: 2,
  },
  {
    id: "4",
    orderNumber: "ORD-39278",
    customer: "James Wilson",
    date: "2025-04-11",
    status: "delivered",
    total: 199.95,
    items: 5,
  },
  {
    id: "5",
    orderNumber: "ORD-39277",
    customer: "Olivia Martinez",
    date: "2025-04-10",
    status: "delivered",
    total: 79.98,
    items: 2,
  },
];

export const dashboardStats: StatCard[] = [
  {
    title: "Total Sales",
    value: "$8,942",
    change: "+12.3%",
    trend: "up",
    icon: DollarSign,
    color: "bg-chart-1/10 text-chart-1",
  },
  {
    title: "Orders",
    value: "237",
    change: "+18.7%",
    trend: "up",
    icon: ShoppingBag,
    color: "bg-chart-2/10 text-chart-2",
  },
  {
    title: "Inventory",
    value: "1,423",
    change: "-3.4%",
    trend: "down",
    icon: Package,
    color: "bg-chart-3/10 text-chart-3",
  },
  {
    title: "Customers",
    value: "3,842",
    change: "+7.1%",
    trend: "up",
    icon: Users,
    color: "bg-chart-4/10 text-chart-4",
  },
];

export const salesData = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 8000 },
  { name: "May", sales: 7000 },
  { name: "Jun", sales: 9000 },
  { name: "Jul", sales: 11000 },
];

export const topSellingProducts = [
  { name: "Natural Glow Foundation", sales: 234, revenue: 9357.66 },
  { name: "Hydrating Face Serum", sales: 156, revenue: 8578.44 },
  { name: "Matte Lipstick Collection", sales: 212, revenue: 6357.88 },
  { name: "Volumizing Mascara", sales: 178, revenue: 4448.22 },
  { name: "Eyeshadow Palette - Sunset", sales: 98, revenue: 4409.02 },
];

export const recentActivities = [
  {
    id: "1",
    title: "New order received",
    description: "Order #ORD-39281 from Emma Thompson",
    time: "10 minutes ago",
    icon: ShoppingBag,
  },
  {
    id: "2",
    title: "Product out of stock",
    description: "Eyeshadow Palette - Sunset has 12 units left",
    time: "2 hours ago",
    icon: Package,
  },
  {
    id: "3",
    title: "Sales milestone reached",
    description: "You've reached $8,000 in sales this month",
    time: "5 hours ago",
    icon: TrendingUp,
  },
  {
    id: "4",
    title: "New review received",
    description: "5-star review for Natural Glow Foundation",
    time: "Yesterday",
    icon: BarChart3,
  },
];
