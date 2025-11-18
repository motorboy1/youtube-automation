"use client";

import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { HardDrive, Download, Upload, CheckCircle, Clock } from "lucide-react";

export default function BackupManagerPage() {
  const backups = [
    { id: 1, name: "Full Backup - Jan 2024", date: "2024-01-15", size: "45 GB", status: "completed" },
    { id: 2, name: "Full Backup - Dec 2023", date: "2023-12-15", size: "42 GB", status: "completed" },
    { id: 3, name: "Full Backup - Nov 2023", date: "2023-11-15", size: "38 GB", status: "completed" },
  ];

  const schedule = [
    { type: "Full Backup", frequency: "Monthly", nextRun: "2024-02-15" },
    { type: "Incremental", frequency: "Daily", nextRun: "2024-01-20" },
    { type: "Database", frequency: "Weekly", nextRun: "2024-01-22" },
  ];

  const leftPanel = (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HardDrive className="h-5 w-5" />
            Storage Info
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">Total Backups</p>
            <p className="text-2xl font-bold">{backups.length}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total Size</p>
            <p className="text-2xl font-bold">125 GB</p>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Storage Used</span>
              <span>125 / 500 GB</span>
            </div>
            <Progress value={25} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button className="w-full">
            <Upload className="h-4 w-4 mr-2" />
            Start Backup
          </Button>
          <Button variant="outline" className="w-full">
            Configure Schedule
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const mainPanel = (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Backup History</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {backups.map((backup) => (
            <div key={backup.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-semibold">{backup.name}</p>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span>{backup.date}</span>
                    <span>{backup.size}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Download className="h-3 w-3 mr-1" />
                  Restore
                </Button>
                <Button size="sm" variant="outline">
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Current Backup</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-medium">Videos & Metadata</span>
            <span className="text-sm text-muted-foreground">Processing...</span>
          </div>
          <Progress value={67} />
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Progress</p>
              <p className="font-medium">67%</p>
            </div>
            <div>
              <p className="text-muted-foreground">Size</p>
              <p className="font-medium">28 GB</p>
            </div>
            <div>
              <p className="text-muted-foreground">Time Left</p>
              <p className="font-medium">~15 min</p>
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
            <Clock className="h-5 w-5" />
            Backup Schedule
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {schedule.map((sched, idx) => (
            <div key={idx} className="p-3 border rounded-lg space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-sm">{sched.type}</p>
                  <p className="text-xs text-muted-foreground">{sched.frequency}</p>
                </div>
              </div>
              <div className="text-xs">
                <span className="text-muted-foreground">Next run: </span>
                <span className="font-medium">{sched.nextRun}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">Auto Backup</span>
            <input type="checkbox" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Cloud Sync</span>
            <input type="checkbox" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Compression</span>
            <input type="checkbox" />
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <AppShell
      mode="three-pane"
      navbarChildren={<div className="font-semibold">Backup Manager</div>}
      leftPanel={{ header: "Overview", children: leftPanel }}
      mainPanel={{ header: "Backups", children: mainPanel }}
      rightPanel={{ header: "Schedule", children: rightPanel }}
    />
  );
}
