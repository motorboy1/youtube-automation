"use client";

import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Upload, CheckCircle, XCircle, Clock } from "lucide-react";

export default function BulkUploaderPage() {
  const queue = [
    { id: 1, name: "video1.mp4", size: "245 MB", status: "completed", progress: 100 },
    { id: 2, name: "video2.mp4", size: "312 MB", status: "uploading", progress: 67 },
    { id: 3, name: "video3.mp4", size: "198 MB", status: "pending", progress: 0 },
    { id: 4, name: "video4.mp4", size: "289 MB", status: "pending", progress: 0 },
  ];

  const leftPanel = (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Upload Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <p className="text-sm text-muted-foreground">Total Files</p>
            <p className="text-2xl font-bold">4</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Completed</p>
            <p className="text-2xl font-bold text-green-600">1</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">In Progress</p>
            <p className="text-2xl font-bold text-blue-600">1</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Pending</p>
            <p className="text-2xl font-bold text-orange-600">2</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "uploading":
        return <Clock className="h-5 w-5 text-blue-600 animate-spin" />;
      case "failed":
        return <XCircle className="h-5 w-5 text-red-600" />;
      default:
        return <Clock className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const mainPanel = (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Upload Queue</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {queue.map((item) => (
            <div key={item.id} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {getStatusIcon(item.status)}
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.size}</p>
                  </div>
                </div>
                <span className="text-sm capitalize">{item.status}</span>
              </div>
              <Progress value={item.progress} />
            </div>
          ))}
        </CardContent>
      </Card>

      <Button className="w-full" size="lg">
        <Upload className="h-4 w-4 mr-2" />
        Add More Files
      </Button>
    </div>
  );

  const rightPanel = (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Bulk Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Default Privacy</label>
            <select className="w-full border rounded-md px-3 py-2">
              <option>Public</option>
              <option>Unlisted</option>
              <option>Private</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Category</label>
            <select className="w-full border rounded-md px-3 py-2">
              <option>Education</option>
              <option>Entertainment</option>
              <option>Technology</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Default Tags</label>
            <input
              className="w-full border rounded-md px-3 py-2"
              placeholder="tutorial, guide"
            />
          </div>
        </CardContent>
      </Card>

      <Button className="w-full" variant="outline">
        Save Template
      </Button>
    </div>
  );

  return (
    <AppShell
      mode="three-pane"
      navbarChildren={<div className="font-semibold">Bulk Uploader</div>}
      leftPanel={{ header: "Statistics", children: leftPanel }}
      mainPanel={{ header: "Upload Manager", children: mainPanel }}
      rightPanel={{ header: "Settings", children: rightPanel }}
    />
  );
}
