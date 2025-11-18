"use client";

import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tag, TrendingUp, Copy, Sparkles } from "lucide-react";

export default function TagGeneratorPage() {
  const trending = [
    { tag: "tutorial", count: "850K", trend: "+12%" },
    { tag: "howto", count: "720K", trend: "+8%" },
    { tag: "2024", count: "650K", trend: "+15%" },
    { tag: "tips", count: "540K", trend: "+5%" },
  ];

  const generated = [
    "tutorial", "beginner", "guide", "howto", "learn", "2024",
    "tips", "tricks", "complete", "full", "course", "free"
  ];

  const related = [
    "programming tutorial",
    "coding for beginners",
    "web development",
    "software engineering",
  ];

  const leftPanel = (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Trending Tags
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {trending.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center p-2 border rounded-lg">
              <div>
                <p className="font-semibold">#{item.tag}</p>
                <p className="text-xs text-muted-foreground">{item.count} videos</p>
              </div>
              <span className="text-sm text-green-600 font-medium">{item.trend}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Related Tags</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {related.map((tag, idx) => (
            <Button key={idx} variant="outline" className="w-full justify-start" size="sm">
              <Tag className="h-3 w-3 mr-2" />
              {tag}
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  );

  const mainPanel = (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Generate Tags</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Video Title</label>
            <Input placeholder="Enter your video title..." />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Video Description</label>
            <textarea
              className="w-full min-h-[120px] rounded-md border px-3 py-2"
              placeholder="Enter video description..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Category</label>
            <select className="w-full border rounded-md px-3 py-2">
              <option>Education</option>
              <option>Entertainment</option>
              <option>Technology</option>
              <option>Gaming</option>
            </select>
          </div>
          <Button className="w-full">
            <Sparkles className="h-4 w-4 mr-2" />
            Generate Tags
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const rightPanel = (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Generated Tags (12)</CardTitle>
            <Button size="sm" variant="outline">
              <Copy className="h-3 w-3 mr-1" />
              Copy
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {generated.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tag Statistics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <p className="text-sm text-muted-foreground">Total Tags</p>
            <p className="text-2xl font-bold">12</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Character Count</p>
            <p className="text-2xl font-bold">87 / 500</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">SEO Score</p>
            <p className="text-2xl font-bold text-green-600">85%</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <AppShell
      mode="three-pane"
      navbarChildren={<div className="font-semibold">Tag Generator</div>}
      leftPanel={{ header: "Suggestions", children: leftPanel }}
      mainPanel={{ header: "Input", children: mainPanel }}
      rightPanel={{ header: "Results", children: rightPanel }}
    />
  );
}
