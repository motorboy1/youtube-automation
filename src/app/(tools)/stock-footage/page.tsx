"use client";

import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Video, Download, Heart, Search, Filter } from "lucide-react";

export default function StockFootagePage() {
  const categories = ["Nature", "Business", "Technology", "People", "Abstract"];

  const footage = [
    { id: 1, title: "Ocean Waves", category: "Nature", duration: "0:15", resolution: "4K" },
    { id: 2, title: "Office Meeting", category: "Business", duration: "0:30", resolution: "HD" },
    { id: 3, title: "Data Visualization", category: "Technology", duration: "0:20", resolution: "4K" },
    { id: 4, title: "City Timelapse", category: "Abstract", duration: "0:45", resolution: "4K" },
  ];

  const leftPanel = (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Categories
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((cat) => (
            <Button key={cat} variant="ghost" className="w-full justify-start">
              {cat}
            </Button>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <label className="text-sm font-medium">Resolution</label>
            <select className="w-full border rounded-md px-3 py-2">
              <option>All</option>
              <option>4K</option>
              <option>HD</option>
              <option>SD</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Duration</label>
            <select className="w-full border rounded-md px-3 py-2">
              <option>Any</option>
              <option>0-15s</option>
              <option>15-30s</option>
              <option>30s+</option>
            </select>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const mainPanel = (
    <div className="space-y-6">
      <div className="flex gap-2">
        <Input placeholder="Search footage..." className="flex-1" />
        <Button variant="outline" size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {footage.map((video) => (
          <Card key={video.id} className="overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600" />
            <CardContent className="p-4 space-y-3">
              <div>
                <p className="font-semibold">{video.title}</p>
                <p className="text-sm text-muted-foreground">{video.category}</p>
              </div>
              <div className="flex justify-between text-sm">
                <span>{video.duration}</span>
                <span className="font-medium">{video.resolution}</span>
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="flex-1">
                  <Download className="h-3 w-3 mr-1" />
                  Download
                </Button>
                <Button size="sm" variant="outline">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const rightPanel = (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg" />
          <div>
            <p className="font-semibold">Ocean Waves</p>
            <p className="text-sm text-muted-foreground">Nature footage</p>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-muted-foreground">Duration</p>
              <p className="font-medium">0:15</p>
            </div>
            <div>
              <p className="text-muted-foreground">Resolution</p>
              <p className="font-medium">4K</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Downloads</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">12</p>
          <p className="text-sm text-muted-foreground">this month</p>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <AppShell
      mode="three-pane"
      navbarChildren={<div className="font-semibold">Stock Footage</div>}
      leftPanel={{ header: "Filter", children: leftPanel }}
      mainPanel={{ header: "Browse", children: mainPanel }}
      rightPanel={{ header: "Details", children: rightPanel }}
    />
  );
}
