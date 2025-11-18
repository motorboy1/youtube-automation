"use client";

import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, Video, CheckCircle } from "lucide-react";

export default function VideoSchedulerPage() {
  const scheduled = [
    { id: 1, title: "Tutorial Part 1", date: "2024-01-15", time: "09:00", status: "scheduled" },
    { id: 2, title: "Tutorial Part 2", date: "2024-01-16", time: "09:00", status: "scheduled" },
    { id: 3, title: "Q&A Session", date: "2024-01-17", time: "14:00", status: "scheduled" },
  ];

  const leftPanel = (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium mb-2">
              {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 35 }, (_, i) => {
                const day = i - 2;
                const isScheduled = [13, 14, 15].includes(day);
                return (
                  <div
                    key={i}
                    className={`aspect-square flex items-center justify-center text-xs rounded ${
                      day < 1 ? "text-muted-foreground" : ""
                    } ${isScheduled ? "bg-blue-500 text-white font-bold" : "hover:bg-muted"}`}
                  >
                    {day > 0 && day <= 31 ? day : ""}
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Published
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">24</p>
          <p className="text-sm text-muted-foreground">videos this month</p>
        </CardContent>
      </Card>
    </div>
  );

  const mainPanel = (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Schedule New Video</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Video Title</Label>
            <Input placeholder="Enter video title..." />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Publish Date
              </Label>
              <Input type="date" />
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Publish Time
              </Label>
              <Input type="time" defaultValue="09:00" />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Video File</Label>
            <Input type="file" accept="video/*" />
          </div>
          <Button className="w-full">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Video
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const rightPanel = (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="h-5 w-5" />
            Scheduled Videos
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {scheduled.map((video) => (
            <div key={video.id} className="p-3 border rounded-lg space-y-1">
              <p className="font-semibold text-sm">{video.title}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>{video.date}</span>
                <Clock className="h-3 w-3" />
                <span>{video.time}</span>
              </div>
              <div className="flex gap-2 mt-2">
                <Button size="sm" variant="outline" className="flex-1">
                  Edit
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  Cancel
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );

  return (
    <AppShell
      mode="three-pane"
      navbarChildren={<div className="font-semibold">Video Scheduler</div>}
      leftPanel={{ header: "Calendar View", children: leftPanel }}
      mainPanel={{ header: "Schedule Editor", children: mainPanel }}
      rightPanel={{ header: "Upcoming", children: rightPanel }}
    />
  );
}
