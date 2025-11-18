"use client";

import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Settings, Image, Bell, Shield, Users } from "lucide-react";

export default function ChannelSettingsPage() {
  const sections = [
    { id: "basic", name: "Basic Info", icon: Settings },
    { id: "branding", name: "Branding", icon: Image },
    { id: "notifications", name: "Notifications", icon: Bell },
    { id: "privacy", name: "Privacy", icon: Shield },
    { id: "community", name: "Community", icon: Users },
  ];

  const leftPanel = (
    <div className="space-y-2">
      {sections.map((section) => (
        <Button key={section.id} variant="ghost" className="w-full justify-start">
          <section.icon className="h-4 w-4 mr-2" />
          {section.name}
        </Button>
      ))}
    </div>
  );

  const mainPanel = (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Channel Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Channel Name</Label>
            <Input defaultValue="My Awesome Channel" />
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea rows={6} defaultValue="Welcome to my channel..." />
          </div>
          <div className="space-y-2">
            <Label>Contact Email</Label>
            <Input type="email" defaultValue="contact@mychannel.com" />
          </div>
          <div className="space-y-2">
            <Label>Country</Label>
            <select className="w-full border rounded-md px-3 py-2">
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
            </select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Channel Keywords</CardTitle>
        </CardHeader>
        <CardContent>
          <Input placeholder="tutorial, tech, programming" />
          <p className="text-sm text-muted-foreground mt-2">
            Separate keywords with commas
          </p>
        </CardContent>
      </Card>
    </div>
  );

  const rightPanel = (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Channel Stats</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <p className="text-sm text-muted-foreground">Subscribers</p>
            <p className="text-2xl font-bold">24.5K</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total Views</p>
            <p className="text-2xl font-bold">1.2M</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Videos</p>
            <p className="text-2xl font-bold">87</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="outline" className="w-full">
            Upload Logo
          </Button>
          <Button variant="outline" className="w-full">
            Upload Banner
          </Button>
          <Button variant="outline" className="w-full">
            Upload Watermark
          </Button>
        </CardContent>
      </Card>

      <Button className="w-full">Save All Changes</Button>
    </div>
  );

  return (
    <AppShell
      mode="three-pane"
      navbarChildren={<div className="font-semibold">Channel Settings</div>}
      leftPanel={{ header: "Settings Menu", children: leftPanel }}
      mainPanel={{ header: "Edit Settings", children: mainPanel }}
      rightPanel={{ header: "Overview", children: rightPanel }}
    />
  );
}
