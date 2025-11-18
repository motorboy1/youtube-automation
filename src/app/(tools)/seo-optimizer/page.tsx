"use client";

import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Search, TrendingUp, Tag, CheckCircle, AlertCircle } from "lucide-react";

export default function SEOOptimizerPage() {
  const suggestions = [
    { text: "Add 'tutorial' keyword", impact: "High", icon: CheckCircle },
    { text: "Title too long (reduce by 10 chars)", impact: "Medium", icon: AlertCircle },
    { text: "Use more specific tags", impact: "High", icon: Tag },
  ];

  const keywords = [
    { word: "tutorial", volume: "150K", difficulty: "Medium", score: 85 },
    { word: "beginner guide", volume: "89K", difficulty: "Low", score: 92 },
    { word: "how to", volume: "320K", difficulty: "High", score: 65 },
  ];

  const leftPanel = (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Keyword Research
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {keywords.map((kw, idx) => (
            <div key={idx} className="space-y-2 p-3 bg-muted rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-semibold">{kw.word}</span>
                <span className="text-sm text-muted-foreground">{kw.volume}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Difficulty: {kw.difficulty}</span>
                <span>Score: {kw.score}</span>
              </div>
              <Progress value={kw.score} />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );

  const mainPanel = (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Video Metadata</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Title (60/100 characters)</Label>
            <Input defaultValue="Complete Beginner Tutorial - Learn in 2024" />
            <Progress value={60} />
          </div>
          <div className="space-y-2">
            <Label>Description (320/5000 characters)</Label>
            <Textarea rows={8} defaultValue="In this comprehensive tutorial, you'll learn everything..." />
            <Progress value={6} />
          </div>
          <div className="space-y-2">
            <Label>Tags</Label>
            <Input defaultValue="tutorial, guide, beginner, 2024" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>SEO Score</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="text-6xl font-bold text-green-600 mb-2">78</div>
            <p className="text-muted-foreground">Good - Room for improvement</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const rightPanel = (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Suggestions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {suggestions.map((sug, idx) => (
            <div key={idx} className="flex items-start gap-2 p-3 bg-muted rounded-lg">
              <sug.icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-medium">{sug.text}</p>
                <p className="text-xs text-muted-foreground">Impact: {sug.impact}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Button className="w-full">Apply All Suggestions</Button>
    </div>
  );

  return (
    <AppShell
      mode="three-pane"
      navbarChildren={<div className="font-semibold">SEO Optimizer</div>}
      leftPanel={{ header: "Keywords", children: leftPanel }}
      mainPanel={{ header: "Content Editor", children: mainPanel }}
      rightPanel={{ header: "Optimization", children: rightPanel }}
    />
  );
}
