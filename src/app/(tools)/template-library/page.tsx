"use client";

import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FileText, Star, Download, Eye, Search } from "lucide-react";

export default function TemplateLibraryPage() {
  const categories = ["All Templates", "Intros", "Outros", "Thumbnails", "Lower Thirds", "Transitions"];

  const templates = [
    { id: 1, name: "Modern Intro", category: "Intros", rating: 4.8, downloads: 1234, premium: false },
    { id: 2, name: "Epic Outro", category: "Outros", rating: 4.9, downloads: 2341, premium: true },
    { id: 3, name: "Minimal Thumbnail", category: "Thumbnails", rating: 4.7, downloads: 3456, premium: false },
    { id: 4, name: "Lower Third Pack", category: "Lower Thirds", rating: 4.6, downloads: 987, premium: true },
  ];

  const featured = [
    { name: "Pro Intro Pack", price: "$29", featured: true },
    { name: "Complete Bundle", price: "$99", featured: true },
  ];

  const leftPanel = (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((cat, idx) => (
            <Button key={idx} variant="ghost" className="w-full justify-start">
              {cat}
            </Button>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Featured</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {featured.map((item, idx) => (
            <div key={idx} className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm opacity-90">{item.price}</p>
              <Button size="sm" variant="secondary" className="w-full mt-2">
                Get Now
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );

  const mainPanel = (
    <div className="space-y-6">
      <div className="flex gap-2">
        <Input placeholder="Search templates..." className="flex-1" />
        <Button variant="outline" size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {templates.map((template) => (
          <Card key={template.id} className="overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative">
              {template.premium && (
                <span className="absolute top-2 right-2 px-2 py-1 bg-yellow-500 text-white text-xs font-bold rounded">
                  PRO
                </span>
              )}
            </div>
            <CardContent className="p-4 space-y-3">
              <div>
                <p className="font-semibold">{template.name}</p>
                <p className="text-sm text-muted-foreground">{template.category}</p>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                  {template.rating}
                </span>
                <span className="flex items-center gap-1">
                  <Download className="h-3 w-3" />
                  {template.downloads}
                </span>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Eye className="h-3 w-3 mr-1" />
                  Preview
                </Button>
                <Button size="sm" className="flex-1">
                  {template.premium ? "Buy" : "Free"}
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
          <CardTitle>Template Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg" />
          <div>
            <p className="font-semibold">Modern Intro</p>
            <p className="text-sm text-muted-foreground">Professional intro template</p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Duration</p>
              <p className="font-medium">5 seconds</p>
            </div>
            <div>
              <p className="text-muted-foreground">Resolution</p>
              <p className="font-medium">1080p</p>
            </div>
            <div>
              <p className="text-muted-foreground">Rating</p>
              <p className="font-medium flex items-center gap-1">
                <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                4.8
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Downloads</p>
              <p className="font-medium">1.2K</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            My Templates
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">8</p>
          <p className="text-sm text-muted-foreground">templates saved</p>
          <Button variant="outline" className="w-full mt-3">
            View All
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <AppShell
      mode="three-pane"
      navbarChildren={<div className="font-semibold">Template Library</div>}
      leftPanel={{ header: "Browse", children: leftPanel }}
      mainPanel={{ header: "Templates", children: mainPanel }}
      rightPanel={{ header: "Details", children: rightPanel }}
    />
  );
}
