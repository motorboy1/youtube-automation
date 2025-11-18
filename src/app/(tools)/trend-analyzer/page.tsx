"use client";

import { AppShell } from "@/components/layout/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Eye, ThumbsUp, Share2, ArrowUp, ArrowDown } from "lucide-react";

export default function TrendAnalyzerPage() {
  const trends = [
    { topic: "AI Tutorial", growth: "+245%", views: "2.3M", icon: ArrowUp, color: "text-green-600" },
    { topic: "Web3 Guide", growth: "+189%", views: "1.8M", icon: ArrowUp, color: "text-green-600" },
    { topic: "Mobile Dev", growth: "+156%", views: "1.5M", icon: ArrowUp, color: "text-green-600" },
    { topic: "Gaming Tips", growth: "-12%", views: "890K", icon: ArrowDown, color: "text-red-600" },
  ];

  const topVideos = [
    { title: "AI Basics Tutorial", views: "523K", likes: "24K", shares: "3.2K", trend: "up" },
    { title: "React 2024 Guide", views: "412K", likes: "19K", shares: "2.8K", trend: "up" },
    { title: "Python for Beginners", views: "389K", likes: "17K", shares: "2.1K", trend: "down" },
  ];

  const categories = [
    { name: "Education", percentage: 35, color: "bg-blue-600" },
    { name: "Technology", percentage: 28, color: "bg-purple-600" },
    { name: "Entertainment", percentage: 22, color: "bg-orange-600" },
    { name: "Gaming", percentage: 15, color: "bg-green-600" },
  ];

  const mainPanel = (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {trends.map((trend, idx) => (
          <Card key={idx}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{trend.topic}</CardTitle>
              <trend.icon className={`h-4 w-4 ${trend.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{trend.views}</div>
              <p className={`text-xs font-medium ${trend.color}`}>{trend.growth}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Trending Videos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topVideos.map((video, idx) => (
                <div key={idx} className="border rounded-lg p-4 space-y-2">
                  <p className="font-semibold">{video.title}</p>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {video.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="h-3 w-3" />
                      {video.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <Share2 className="h-3 w-3" />
                      {video.shares}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Category Distribution</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {categories.map((cat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{cat.name}</span>
                  <span className="text-muted-foreground">{cat.percentage}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className={`h-full ${cat.color}`} style={{ width: `${cat.percentage}%` }} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Trend Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, idx) => {
              const value = 50 + Math.random() * 50;
              return (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{day}</span>
                    <span className="text-muted-foreground">{Math.round(value)}K views</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600" style={{ width: `${value}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <AppShell
      mode="dashboard"
      navbarChildren={<div className="font-semibold">Trend Analyzer</div>}
      mainPanel={{ header: "Market Trends", children: mainPanel }}
    />
  );
}
