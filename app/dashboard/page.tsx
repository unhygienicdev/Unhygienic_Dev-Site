"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  Activity, 
  CreditCard,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    title: "Total Projects",
    value: "12",
    change: "+2",
    trend: "up",
    icon: Activity,
  },
  {
    title: "API Calls",
    value: "2.4M",
    change: "+18%",
    trend: "up",
    icon: TrendingUp,
  },
  {
    title: "Team Members",
    value: "8",
    change: "+1",
    trend: "up",
    icon: Users,
  },
  {
    title: "Current Plan",
    value: "Pro",
    change: "Renews Jan 1",
    trend: "neutral",
    icon: CreditCard,
  },
];

const recentActivity = [
  { action: "New project created", project: "API v2", time: "2 hours ago" },
  { action: "Team member added", project: "Dashboard", time: "5 hours ago" },
  { action: "Deployment successful", project: "Landing Page", time: "1 day ago" },
  { action: "API key generated", project: "Mobile App", time: "2 days ago" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here&apos;s what&apos;s happening.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="border-border/50 bg-card/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className="h-5 w-5 text-muted-foreground" />
                  <Badge variant={stat.trend === "up" ? "default" : "secondary"} className="text-xs">
                    {stat.trend === "up" ? (
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                    ) : stat.trend === "down" ? (
                      <ArrowDownRight className="h-3 w-3 mr-1" />
                    ) : null}
                    {stat.change}
                  </Badge>
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.title}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <Card className="border-border/50 bg-card/50">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b border-border/50 last:border-0"
              >
                <div>
                  <p className="font-medium text-sm">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.project}</p>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
