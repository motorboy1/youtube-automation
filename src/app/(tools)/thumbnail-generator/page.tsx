"use client";

import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Image, Type, Palette, Download, Wand2 } from "lucide-react";
import { useState } from "react";

export default function ThumbnailGeneratorPage() {
  const [selectedTemplate, setSelectedTemplate] = useState("template-1");

  const templates = [
    { id: "template-1", name: "Bold Text", preview: "/api/placeholder/200/120" },
    { id: "template-2", name: "Split Screen", preview: "/api/placeholder/200/120" },
    { id: "template-3", name: "Minimal", preview: "/api/placeholder/200/120" },
    { id: "template-4", name: "Neon Style", preview: "/api/placeholder/200/120" },
  ];

  const leftPanel = (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="font-semibold">Templates</h3>
        {templates.map((template) => (
          <Card
            key={template.id}
            className={`cursor-pointer transition-all ${
              selectedTemplate === template.id ? "ring-2 ring-blue-500" : ""
            }`}
            onClick={() => setSelectedTemplate(template.id)}
          >
            <CardContent className="p-3">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded mb-2" />
              <p className="text-sm font-medium">{template.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const mainPanel = (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Image className="h-5 w-5" />
            Preview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <div className="text-white text-4xl font-bold">AMAZING VIDEO TITLE</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Type className="h-5 w-5" />
            Text Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Main Text</Label>
            <Input defaultValue="AMAZING VIDEO TITLE" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Font Size</Label>
              <Input type="number" defaultValue="48" />
            </div>
            <div className="space-y-2">
              <Label>Text Color</Label>
              <Input type="color" defaultValue="#ffffff" />
            </div>
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
            <Palette className="h-5 w-5" />
            Colors
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <Label>Background</Label>
            <Input type="color" defaultValue="#3b82f6" />
          </div>
          <div className="space-y-2">
            <Label>Accent</Label>
            <Input type="color" defaultValue="#a855f7" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AI Tools</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button className="w-full" variant="outline">
            <Wand2 className="h-4 w-4 mr-2" />
            Auto Generate
          </Button>
          <Button className="w-full" variant="outline">
            Suggest Colors
          </Button>
        </CardContent>
      </Card>

      <Button className="w-full" size="lg">
        <Download className="h-4 w-4 mr-2" />
        Download
      </Button>
    </div>
  );

  return (
    <AppShell
      mode="three-pane"
      navbarChildren={<div className="font-semibold">Thumbnail Generator</div>}
      leftPanel={{ header: "Templates", children: leftPanel }}
      mainPanel={{ header: "Design Studio", children: mainPanel }}
      rightPanel={{ header: "Settings", children: rightPanel }}
    />
  );
}
