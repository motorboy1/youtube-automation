"use client";

import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Film, Scissors, Volume2, Image, Play } from "lucide-react";

export default function VideoEditorPage() {
  const clips = [
    { id: 1, name: "intro.mp4", duration: "00:05" },
    { id: 2, name: "main.mp4", duration: "10:30" },
    { id: 3, name: "outro.mp4", duration: "00:10" },
  ];

  const leftPanel = (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Film className="h-5 w-5" />
            Media Library
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {clips.map((clip) => (
            <div key={clip.id} className="p-3 border rounded-lg cursor-pointer hover:bg-muted">
              <p className="font-semibold text-sm">{clip.name}</p>
              <p className="text-xs text-muted-foreground">{clip.duration}</p>
            </div>
          ))}
          <Button variant="outline" className="w-full">
            Import Media
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const mainPanel = (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Video Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <Play className="h-16 w-16 text-muted-foreground" />
          </div>
          <div className="flex gap-2 mt-4">
            <Button size="sm">
              <Play className="h-3 w-3 mr-1" />
              Play
            </Button>
            <Button size="sm" variant="outline">
              <Scissors className="h-3 w-3 mr-1" />
              Cut
            </Button>
            <Button size="sm" variant="outline">
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex gap-2">
              <div className="flex-1 h-12 bg-blue-200 rounded flex items-center px-3">
                <span className="text-sm font-medium">intro.mp4</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 h-12 bg-green-200 rounded flex items-center px-3">
                <span className="text-sm font-medium">main.mp4</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 h-12 bg-purple-200 rounded flex items-center px-3">
                <span className="text-sm font-medium">outro.mp4</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const bottomPanel = (
    <Tabs defaultValue="effects" className="h-full">
      <TabsList>
        <TabsTrigger value="effects">Effects</TabsTrigger>
        <TabsTrigger value="transitions">Transitions</TabsTrigger>
        <TabsTrigger value="audio">Audio</TabsTrigger>
      </TabsList>

      <TabsContent value="effects" className="flex-1 p-4">
        <div className="grid grid-cols-4 gap-4">
          {["Blur", "Brightness", "Contrast", "Saturation"].map((effect) => (
            <Card key={effect} className="cursor-pointer hover:bg-muted">
              <CardContent className="p-4 text-center">
                <Image className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm font-medium">{effect}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="transitions" className="flex-1 p-4">
        <div className="grid grid-cols-4 gap-4">
          {["Fade", "Dissolve", "Wipe", "Slide"].map((trans) => (
            <Card key={trans} className="cursor-pointer hover:bg-muted">
              <CardContent className="p-4 text-center">
                <Scissors className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm font-medium">{trans}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="audio" className="flex-1 p-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Volume2 className="h-5 w-5" />
              Audio Controls
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Volume</label>
              <input type="range" className="w-full" defaultValue={80} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Fade In</label>
              <input type="range" className="w-full" defaultValue={20} />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );

  return (
    <AppShell
      mode="ide"
      navbarChildren={<div className="font-semibold">Video Editor</div>}
      leftPanel={{ header: "Assets", children: leftPanel }}
      mainPanel={{ header: "Editor", children: mainPanel }}
      bottomPanel={{ header: "Tools", children: bottomPanel }}
    />
  );
}
