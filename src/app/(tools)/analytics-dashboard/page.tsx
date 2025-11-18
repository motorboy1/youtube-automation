"use client";

import { AppShell } from "@/components/layout/AppShell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Eye, Video } from "lucide-react";

/**
 * YouTube Analytics Dashboard Tool
 * Part 1 규칙: AppShell + dashboard 모드
 * Part 2 규칙: GI + MDA 분석 적용
 * Dashboard 모드: 좌우 패널 없음, 중앙 패널 중심
 */

interface VideoStats {
  id: string;
  title: string;
  views: number;
  likes: number;
  comments: number;
  publishedAt: string;
}

export default function AnalyticsDashboardPage() {
  // Mock data - 실제로는 YouTube API에서 가져옴
  const kpiData = {
    totalViews: 1284567,
    totalSubscribers: 45231,
    avgViews: 12845,
    totalVideos: 127,
  };

  const weeklyViews = [
    { day: "Mon", views: 12500 },
    { day: "Tue", views: 15800 },
    { day: "Wed", views: 14200 },
    { day: "Thu", views: 18900 },
    { day: "Fri", views: 21500 },
    { day: "Sat", views: 25300 },
    { day: "Sun", views: 22100 },
  ];

  const topVideos: VideoStats[] = [
    {
      id: "1",
      title: "How to Master YouTube SEO in 2024",
      views: 234567,
      likes: 12345,
      comments: 567,
      publishedAt: "2025-11-15",
    },
    {
      id: "2",
      title: "Best Video Editing Tips for Beginners",
      views: 189432,
      likes: 9876,
      comments: 432,
      publishedAt: "2025-11-12",
    },
    {
      id: "3",
      title: "Monetization Secrets Revealed",
      views: 156789,
      likes: 8765,
      comments: 321,
      publishedAt: "2025-11-10",
    },
    {
      id: "4",
      title: "Growing Your Channel from 0 to 100K",
      views: 134567,
      likes: 7654,
      comments: 289,
      publishedAt: "2025-11-08",
    },
    {
      id: "5",
      title: "Ultimate Thumbnail Design Guide",
      views: 123456,
      likes: 6543,
      comments: 234,
      publishedAt: "2025-11-05",
    },
  ];

  const maxViews = Math.max(...weeklyViews.map((d) => d.views));

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  return (
    <AppShell
      mode="dashboard"
      navbarChildren={
        <>
          <a href="/" className="text-sm font-medium hover:text-primary">
            Home
          </a>
          <a href="/youtube-uploader" className="text-sm font-medium hover:text-primary">
            YouTube Uploader
          </a>
          <a
            href="/analytics-dashboard"
            className="text-sm font-medium text-primary"
          >
            Analytics
          </a>
        </>
      }
      mainPanel={{
        header: "YouTube Analytics Dashboard",
        subHeader: "Real-time performance metrics and insights",
        children: (
          <div className="space-y-6">
            {/* KPI Cards Section */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {/* Total Views */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Views
                  </CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {formatNumber(kpiData.totalViews)}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +12.5% from last month
                  </p>
                </CardContent>
              </Card>

              {/* Total Subscribers */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Subscribers
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {formatNumber(kpiData.totalSubscribers)}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +8.2% from last month
                  </p>
                </CardContent>
              </Card>

              {/* Average Views */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Avg Views
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {formatNumber(kpiData.avgViews)}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +5.1% from last month
                  </p>
                </CardContent>
              </Card>

              {/* Total Videos */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Videos
                  </CardTitle>
                  <Video className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {kpiData.totalVideos}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +3 new this month
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Views Trend Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Weekly Views Trend</CardTitle>
                <CardDescription>
                  Last 7 days performance overview
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {weeklyViews.map((item) => (
                    <div key={item.day} className="flex items-center gap-4">
                      <div className="w-12 text-sm font-medium">
                        {item.day}
                      </div>
                      <div className="flex-1">
                        <div className="relative h-8 w-full overflow-hidden rounded-md bg-secondary">
                          <div
                            className="h-full bg-primary transition-all"
                            style={{
                              width: `${(item.views / maxViews) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                      <div className="w-20 text-right text-sm font-medium">
                        {formatNumber(item.views)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Videos Table */}
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Videos</CardTitle>
                <CardDescription>
                  Your most viewed videos this month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topVideos.map((video, index) => (
                    <div
                      key={video.id}
                      className="flex items-start gap-4 rounded-lg border p-4 hover:bg-accent"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        {index + 1}
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="font-medium">{video.title}</div>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span>{formatNumber(video.views)} views</span>
                          <span>{formatNumber(video.likes)} likes</span>
                          <span>{video.comments} comments</span>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {video.publishedAt}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Comments</CardTitle>
                  <CardDescription>Latest viewer feedback</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="rounded-lg border p-3">
                      <div className="text-sm font-medium">@viewer123</div>
                      <div className="text-sm text-muted-foreground">
                        Great tutorial! Very helpful 👍
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        2 hours ago
                      </div>
                    </div>
                    <div className="rounded-lg border p-3">
                      <div className="text-sm font-medium">@creator_pro</div>
                      <div className="text-sm text-muted-foreground">
                        Can you make a video about...
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        5 hours ago
                      </div>
                    </div>
                    <div className="rounded-lg border p-3">
                      <div className="text-sm font-medium">@fan_user</div>
                      <div className="text-sm text-muted-foreground">
                        Love your content! Keep it up 🔥
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        1 day ago
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Growth Insights</CardTitle>
                  <CardDescription>Key performance indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span>Subscriber Growth</span>
                        <span className="font-medium">+8.2%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full bg-green-500"
                          style={{ width: "82%" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span>Watch Time</span>
                        <span className="font-medium">+12.5%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full bg-blue-500"
                          style={{ width: "92%" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span>Engagement Rate</span>
                        <span className="font-medium">+5.1%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full bg-purple-500"
                          style={{ width: "75%" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span>Click-through Rate</span>
                        <span className="font-medium">+3.8%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full bg-yellow-500"
                          style={{ width: "68%" }}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ),
        footer: "Last updated: 2025-11-18 18:45 KST",
      }}
    />
  );
}
