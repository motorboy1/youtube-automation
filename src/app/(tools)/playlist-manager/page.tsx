"use client";

import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ListVideo, GripVertical, Plus, Trash2 } from "lucide-react";

export default function PlaylistManagerPage() {
  const playlists = [
    { id: 1, name: "Beginner Tutorials", videos: 12, views: "45K" },
    { id: 2, name: "Advanced Tips", videos: 8, views: "32K" },
    { id: 3, name: "Q&A Sessions", videos: 15, views: "28K" },
  ];

  const videos = [
    { id: 1, title: "Tutorial Part 1", duration: "12:34", views: "5.2K" },
    { id: 2, title: "Tutorial Part 2", duration: "15:21", views: "4.8K" },
    { id: 3, title: "Tutorial Part 3", duration: "10:15", views: "3.9K" },
  ];

  const leftPanel = (
    <div className="space-y-4">
      <Button className="w-full">
        <Plus className="h-4 w-4 mr-2" />
        New Playlist
      </Button>
      {playlists.map((playlist) => (
        <Card key={playlist.id} className="cursor-pointer hover:bg-muted/50">
          <CardContent className="p-4">
            <p className="font-semibold">{playlist.name}</p>
            <div className="flex justify-between text-sm text-muted-foreground mt-1">
              <span>{playlist.videos} videos</span>
              <span>{playlist.views} views</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const mainPanel = (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Playlist Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Playlist Name</Label>
            <Input defaultValue="Beginner Tutorials" />
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea rows={4} defaultValue="Complete tutorial series for beginners..." />
          </div>
          <div className="space-y-2">
            <Label>Privacy</Label>
            <select className="w-full border rounded-md px-3 py-2">
              <option>Public</option>
              <option>Unlisted</option>
              <option>Private</option>
            </select>
          </div>
          <Button className="w-full">Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  );

  const rightPanel = (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ListVideo className="h-5 w-5" />
            Videos ({videos.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {videos.map((video, idx) => (
            <div key={video.id} className="flex items-center gap-2 p-2 border rounded-lg">
              <GripVertical className="h-4 w-4 text-muted-foreground cursor-move" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{video.title}</p>
                <div className="flex gap-2 text-xs text-muted-foreground">
                  <span>{video.duration}</span>
                  <span>{video.views} views</span>
                </div>
              </div>
              <Button size="sm" variant="ghost">
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          ))}
          <Button variant="outline" className="w-full mt-2">
            <Plus className="h-4 w-4 mr-2" />
            Add Video
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <AppShell
      mode="three-pane"
      navbarChildren={<div className="font-semibold">Playlist Manager</div>}
      leftPanel={{ header: "My Playlists", children: leftPanel }}
      mainPanel={{ header: "Edit Playlist", children: mainPanel }}
      rightPanel={{ header: "Video Order", children: rightPanel }}
    />
  );
}
