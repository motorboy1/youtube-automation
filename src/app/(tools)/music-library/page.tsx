"use client";

import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Music, Play, Download, Heart, Search } from "lucide-react";

export default function MusicLibraryPage() {
  const genres = ["All", "Cinematic", "Electronic", "Acoustic", "Hip Hop", "Rock"];

  const tracks = [
    { id: 1, name: "Epic Journey", artist: "AudioLib", duration: "3:24", genre: "Cinematic", liked: true },
    { id: 2, name: "Digital Dreams", artist: "SoundTrack", duration: "2:45", genre: "Electronic", liked: false },
    { id: 3, name: "Sunny Day", artist: "MusicBox", duration: "4:12", genre: "Acoustic", liked: true },
    { id: 4, name: "Urban Beat", artist: "AudioLib", duration: "3:05", genre: "Hip Hop", liked: false },
  ];

  const playlists = [
    { name: "Intro Music", count: 12 },
    { name: "Background", count: 28 },
    { name: "Outro Music", count: 8 },
  ];

  const leftPanel = (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Genres</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {genres.map((genre) => (
            <Button key={genre} variant="ghost" className="w-full justify-start">
              {genre}
            </Button>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>My Playlists</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {playlists.map((playlist, idx) => (
            <div key={idx} className="p-2 border rounded cursor-pointer hover:bg-muted">
              <p className="font-semibold text-sm">{playlist.name}</p>
              <p className="text-xs text-muted-foreground">{playlist.count} tracks</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );

  const mainPanel = (
    <div className="space-y-6">
      <div className="flex gap-2">
        <Input placeholder="Search music..." className="flex-1" />
        <Button variant="outline" size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Music className="h-5 w-5" />
            All Tracks ({tracks.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {tracks.map((track) => (
            <div key={track.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4 flex-1">
                <Button size="sm" variant="outline">
                  <Play className="h-3 w-3" />
                </Button>
                <div className="flex-1">
                  <p className="font-semibold">{track.name}</p>
                  <p className="text-sm text-muted-foreground">{track.artist}</p>
                </div>
                <span className="text-sm text-muted-foreground">{track.duration}</span>
                <span className="text-xs px-2 py-1 bg-muted rounded">{track.genre}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <Button size="sm" variant="ghost">
                  <Heart className={`h-4 w-4 ${track.liked ? "fill-red-500 text-red-500" : ""}`} />
                </Button>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );

  const rightPanel = (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Now Playing</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="aspect-square bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg" />
          <div>
            <p className="font-semibold">Epic Journey</p>
            <p className="text-sm text-muted-foreground">AudioLib</p>
          </div>
          <div className="space-y-2">
            <div className="h-1 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-purple-600 w-1/3" />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1:08</span>
              <span>3:24</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Favorites</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">
            {tracks.filter((t) => t.liked).length}
          </p>
          <p className="text-sm text-muted-foreground">tracks</p>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <AppShell
      mode="three-pane"
      navbarChildren={<div className="font-semibold">Music Library</div>}
      leftPanel={{ header: "Browse", children: leftPanel }}
      mainPanel={{ header: "Music", children: mainPanel }}
      rightPanel={{ header: "Player", children: rightPanel }}
    />
  );
}
