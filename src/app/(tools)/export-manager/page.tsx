"use client";

import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Download, FileVideo, Settings, CheckCircle, Clock } from "lucide-react";

export default function ExportManagerPage() {
  const formats = [
    { name: "MP4", description: "Universal format", icon: FileVideo },
    { name: "MOV", description: "High quality", icon: FileVideo },
    { name: "WebM", description: "Web optimized", icon: FileVideo },
    { name: "AVI", description: "Uncompressed", icon: FileVideo },
  ];

  const exports = [
    { id: 1, name: "Tutorial_Part1.mp4", format: "MP4", status: "completed", size: "245 MB", progress: 100 },
    { id: 2, name: "Tutorial_Part2.mov", format: "MOV", status: "processing", size: "312 MB", progress: 73 },
    { id: 3, name: "Intro_Video.webm", format: "WebM", status: "queued", size: "98 MB", progress: 0 },
  ];

  const presets = [
    { name: "YouTube 1080p", settings: "H.264, 1920x1080, 60fps" },
    { name: "Instagram Story", settings: "H.264, 1080x1920, 30fps" },
    { name: "Twitter Video", settings: "H.264, 1280x720, 30fps" },
  ];

  const leftPanel = (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Export Formats</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {formats.map((format, idx) => (
            <Button key={idx} variant="outline" className="w-full justify-start">
              <format.icon className="h-4 w-4 mr-2" />
              <div className="text-left">
                <p className="font-semibold">{format.name}</p>
                <p className="text-xs text-muted-foreground">{format.description}</p>
              </div>
            </Button>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Presets</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {presets.map((preset, idx) => (
            <div key={idx} className="p-2 border rounded cursor-pointer hover:bg-muted">
              <p className="font-semibold text-sm">{preset.name}</p>
              <p className="text-xs text-muted-foreground">{preset.settings}</p>
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
          <CardTitle>Export Queue</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {exports.map((exp) => (
            <div key={exp.id} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {exp.status === "completed" ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <Clock className="h-5 w-5 text-blue-600" />
                  )}
                  <div>
                    <p className="font-semibold">{exp.name}</p>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>{exp.format}</span>
                      <span>{exp.size}</span>
                    </div>
                  </div>
                </div>
                <span className="text-sm capitalize">{exp.status}</span>
              </div>
              <Progress value={exp.progress} />
              {exp.status === "completed" && (
                <Button size="sm" variant="outline">
                  <Download className="h-3 w-3 mr-1" />
                  Download
                </Button>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      <Button className="w-full" size="lg">
        Add to Export Queue
      </Button>
    </div>
  );

  const rightPanel = (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Export Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Video Codec</label>
            <select className="w-full border rounded-md px-3 py-2">
              <option>H.264</option>
              <option>H.265</option>
              <option>VP9</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Resolution</label>
            <select className="w-full border rounded-md px-3 py-2">
              <option>1920x1080</option>
              <option>1280x720</option>
              <option>3840x2160</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Frame Rate</label>
            <select className="w-full border rounded-md px-3 py-2">
              <option>30 fps</option>
              <option>60 fps</option>
              <option>24 fps</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Bitrate</label>
            <input
              type="text"
              className="w-full border rounded-md px-3 py-2"
              defaultValue="8000 kbps"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Statistics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <p className="text-sm text-muted-foreground">Total Exports</p>
            <p className="text-2xl font-bold">{exports.length}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Completed</p>
            <p className="text-2xl font-bold text-green-600">
              {exports.filter((e) => e.status === "completed").length}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <AppShell
      mode="three-pane"
      navbarChildren={<div className="font-semibold">Export Manager</div>}
      leftPanel={{ header: "Formats", children: leftPanel }}
      mainPanel={{ header: "Queue", children: mainPanel }}
      rightPanel={{ header: "Settings", children: rightPanel }}
    />
  );
}
