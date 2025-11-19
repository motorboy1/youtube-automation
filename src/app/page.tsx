"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { categories, getToolsByCategory } from "@/lib/navigation-data";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HomePage() {
  const getCategoryColor = (color: string) => {
    const colors: Record<string, string> = {
      blue: "from-blue-500 to-blue-600",
      purple: "from-purple-500 to-purple-600",
      green: "from-green-500 to-green-600",
      orange: "from-orange-500 to-orange-600",
      pink: "from-pink-500 to-pink-600",
    };
    return colors[color] || "from-gray-500 to-gray-600";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="border-b bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              25+ Professional Tools
            </div>
            <h1 className="text-5xl font-bold tracking-tight">
              YouTube Automation Platform
            </h1>
            <p className="text-xl text-muted-foreground">
              Complete suite of tools to automate your YouTube workflow, from content creation to analytics
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/youtube-uploader">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/analytics-dashboard">View Analytics</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tools by Category */}
      <div className="container mx-auto px-4 py-16 space-y-16">
        {categories.map((category) => {
          const tools = getToolsByCategory(category.id);

          return (
            <div key={category.id} className="space-y-6">
              <div className="flex items-center gap-4">
                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${getCategoryColor(category.color)}`} />
                <h2 className="text-3xl font-bold">{category.name}</h2>
                <div className="flex-1 h-px bg-border" />
                <span className="text-sm text-muted-foreground">{tools.length} tools</span>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {tools.map((tool) => {
                  const Icon = tool.icon;

                  return (
                    <Link key={tool.id} href={tool.href}>
                      <Card className="h-full transition-all hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className={`p-3 rounded-lg bg-gradient-to-br ${getCategoryColor(category.color)}`}>
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xs px-2 py-1 rounded-full bg-muted font-medium">
                              {tool.mode === "three-pane"
                                ? "Three-Pane"
                                : tool.mode === "dashboard"
                                ? "Dashboard"
                                : "IDE Mode"}
                            </span>
                          </div>
                          <CardTitle className="mt-4">{tool.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{tool.description}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Stats Section */}
      <div className="border-t bg-muted/20">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Professional Tools</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">UI Modes</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © 2025 25+ Tool Studio. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with Next.js 14 & TypeScript
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
