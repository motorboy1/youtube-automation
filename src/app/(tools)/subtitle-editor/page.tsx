"use client";

import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Play, Download, Upload } from "lucide-react";

export default function SubtitleEditorPage() {
  const languages = [
    { code: "en", name: "English", progress: 100 },
    { code: "es", name: "Spanish", progress: 75 },
    { code: "fr", name: "French", progress: 50 },
  ];

  const subtitles = [
    { id: 1, start: "00:00:00", end: "00:00:05", text: "Welcome to this tutorial" },
    { id: 2, start: "00:00:05", end: "00:00:10", text: "Today we'll learn about..." },
    { id: 3, start: "00:00:10", end: "00:00:15", text: "Let's get started!" },
  ];

  const leftPanel = (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Languages
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {languages.map((lang) => (
            <div key={lang.code} className="p-3 border rounded-lg cursor-pointer hover:bg-muted">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">{lang.name}</span>
                <span className="text-sm text-muted-foreground">{lang.progress}%</span>
              </div>
              <div className="h-1 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-blue-600" style={{ width: `${lang.progress}%` }} />
              </div>
            </div>
          ))}
          <Button variant="outline" className="w-full">
            <Upload className="h-4 w-4 mr-2" />
            Add Language
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const mainPanel = (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Subtitle Timeline</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {subtitles.map((sub) => (
            <div key={sub.id} className="border rounded-lg p-4 space-y-2">
              <div className="flex gap-4">
                <div className="flex gap-2 text-sm">
                  <Input defaultValue={sub.start} className="w-24" />
                  <span className="self-center">→</span>
                  <Input defaultValue={sub.end} className="w-24" />
                </div>
                <Button size="sm" variant="outline">
                  <Play className="h-3 w-3" />
                </Button>
              </div>
              <Input defaultValue={sub.text} className="font-medium" />
            </div>
          ))}
          <Button variant="outline" className="w-full">
            Add Subtitle
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const bottomPanel = (
    <Tabs defaultValue="preview" className="h-full">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="export">Export</TabsTrigger>
        <TabsTrigger value="ai">AI Tools</TabsTrigger>
      </TabsList>

      <TabsContent value="preview" className="flex-1 p-4">
        <Card>
          <CardContent className="p-6">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Play className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Video Preview</p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-black text-white text-center rounded">
              <p>Welcome to this tutorial</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="export" className="flex-1 p-4">
        <Card>
          <CardHeader>
            <CardTitle>Export Options</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Download SRT
            </Button>
            <Button variant="outline" className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Download VTT
            </Button>
            <Button variant="outline" className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Download ASS
            </Button>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="ai" className="flex-1 p-4">
        <Card>
          <CardHeader>
            <CardTitle>AI Assistance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full">
              Auto-Generate Subtitles
            </Button>
            <Button variant="outline" className="w-full">
              Translate All
            </Button>
            <Button variant="outline" className="w-full">
              Fix Timing
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );

  return (
    <AppShell
      mode="ide"
      navbarChildren={<div className="font-semibold">Subtitle Editor</div>}
      leftPanel={{ header: "Languages", children: leftPanel }}
      mainPanel={{ header: "Edit Subtitles", children: mainPanel }}
      bottomPanel={{ header: "Tools", children: bottomPanel }}
    />
  );
}
