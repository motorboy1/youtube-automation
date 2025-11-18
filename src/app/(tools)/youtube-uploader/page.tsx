"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

/**
 * YouTube Video Uploader Tool
 * Part 1 규칙: AppShell + three-pane 모드
 * Part 2 규칙: GI + MDA 분석 적용
 */

interface UploadHistory {
  id: string;
  title: string;
  date: string;
  status: "success" | "failed" | "uploading";
}

export default function YouTubeUploaderPage() {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [category, setCategory] = useState("22"); // People & Blogs
  const [privacy, setPrivacy] = useState("private");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Mock upload history
  const [uploadHistory] = useState<UploadHistory[]>([
    {
      id: "1",
      title: "Sample Video 1",
      date: "2025-11-18",
      status: "success",
    },
    {
      id: "2",
      title: "Sample Video 2",
      date: "2025-11-17",
      status: "success",
    },
  ]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVideoFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!videoFile) {
      alert("Please select a video file");
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          alert("Upload completed! (Demo mode - no actual upload)");
          return 100;
        }
        return prev + 10;
      });
    }, 500);

    // TODO: Implement actual YouTube API upload
    // This is a placeholder for demonstration
  };

  return (
    <AppShell
      mode="three-pane"
      navbarChildren={
        <>
          <a href="/" className="text-sm font-medium hover:text-primary">
            Home
          </a>
          <a
            href="/youtube-uploader"
            className="text-sm font-medium text-primary"
          >
            YouTube Uploader
          </a>
        </>
      }
      leftPanel={{
        header: "Upload History",
        subHeader: "Recent uploads",
        children: (
          <div className="space-y-2">
            {uploadHistory.map((item) => (
              <Card key={item.id} className="cursor-pointer hover:bg-accent">
                <CardHeader className="p-4">
                  <CardTitle className="text-sm">{item.title}</CardTitle>
                  <CardDescription className="text-xs">
                    {item.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div
                    className={`text-xs ${
                      item.status === "success"
                        ? "text-green-600"
                        : item.status === "failed"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {item.status.toUpperCase()}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ),
        footer: `${uploadHistory.length} uploads`,
      }}
      mainPanel={{
        header: "YouTube Video Uploader",
        subHeader: "Upload and manage your YouTube videos",
        children: (
          <div className="space-y-6">
            {/* File Upload Section */}
            <Card>
              <CardHeader>
                <CardTitle>Select Video</CardTitle>
                <CardDescription>
                  Choose a video file to upload to YouTube
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="video-file">Video File</Label>
                  <Input
                    id="video-file"
                    type="file"
                    accept="video/*"
                    onChange={handleFileChange}
                    disabled={isUploading}
                  />
                  {videoFile && (
                    <p className="text-sm text-muted-foreground">
                      Selected: {videoFile.name} (
                      {(videoFile.size / 1024 / 1024).toFixed(2)} MB)
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Metadata Section */}
            <Card>
              <CardHeader>
                <CardTitle>Video Metadata</CardTitle>
                <CardDescription>
                  Enter information about your video
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    placeholder="Enter video title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    disabled={isUploading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter video description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    disabled={isUploading}
                    rows={5}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <Input
                    id="tags"
                    placeholder="Enter tags (comma-separated)"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    disabled={isUploading}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <select
                      id="category"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      disabled={isUploading}
                    >
                      <option value="1">Film & Animation</option>
                      <option value="2">Autos & Vehicles</option>
                      <option value="10">Music</option>
                      <option value="15">Pets & Animals</option>
                      <option value="17">Sports</option>
                      <option value="19">Travel & Events</option>
                      <option value="20">Gaming</option>
                      <option value="22">People & Blogs</option>
                      <option value="23">Comedy</option>
                      <option value="24">Entertainment</option>
                      <option value="25">News & Politics</option>
                      <option value="26">Howto & Style</option>
                      <option value="27">Education</option>
                      <option value="28">Science & Technology</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="privacy">Privacy</Label>
                    <select
                      id="privacy"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      value={privacy}
                      onChange={(e) => setPrivacy(e.target.value)}
                      disabled={isUploading}
                    >
                      <option value="private">Private</option>
                      <option value="unlisted">Unlisted</option>
                      <option value="public">Public</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upload Progress */}
            {isUploading && (
              <Card>
                <CardHeader>
                  <CardTitle>Upload Progress</CardTitle>
                  <CardDescription>Uploading to YouTube...</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={uploadProgress} className="w-full" />
                  <p className="mt-2 text-sm text-muted-foreground">
                    {uploadProgress}% complete
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Upload Button */}
            <Button
              onClick={handleUpload}
              disabled={!videoFile || !title || isUploading}
              size="lg"
              className="w-full"
            >
              {isUploading ? "Uploading..." : "Upload to YouTube"}
            </Button>
          </div>
        ),
        footer: "API Status: Ready (Demo Mode)",
      }}
      rightPanel={{
        header: "Preview & Settings",
        subHeader: "Quick options",
        children: (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Thumbnail Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-md border bg-muted flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">
                    No thumbnail selected
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Quick Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span>Privacy:</span>
                  <span className="font-medium">{privacy}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Category:</span>
                  <span className="font-medium">
                    {category === "22" ? "People & Blogs" : `ID: ${category}`}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">AI Suggestions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  AI-powered title and tag suggestions coming soon...
                </p>
              </CardContent>
            </Card>
          </div>
        ),
        footer: "Settings saved",
      }}
    />
  );
}
