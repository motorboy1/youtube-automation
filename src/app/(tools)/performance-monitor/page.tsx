"use client";

import { AppShell } from "@/components/layout/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Zap, Clock, AlertTriangle } from "lucide-react";

export default function PerformanceMonitorPage() {
  const metrics = [
    { label: "Avg Upload Time", value: "2.3 min", change: "-15%", icon: Clock, color: "text-green-600" },
    { label: "Processing Speed", value: "1.2x", change: "+8%", icon: Zap, color: "text-blue-600" },
    { label: "Success Rate", value: "98.5%", change: "+2%", icon: Activity, color: "text-green-600" },
    { label: "Errors", value: "3", change: "-40%", icon: AlertTriangle, color: "text-orange-600" },
  ];

  const systemHealth = [
    { component: "Upload Service", status: "healthy", uptime: "99.9%" },
    { component: "Video Processor", status: "healthy", uptime: "99.8%" },
    { component: "Analytics API", status: "degraded", uptime: "97.2%" },
    { component: "Storage Service", status: "healthy", uptime: "100%" },
  ];

  const recentJobs = [
    { id: 1, name: "Video Upload #1234", status: "completed", duration: "2m 15s", cpu: "45%", memory: "2.1 GB" },
    { id: 2, name: "Thumbnail Gen #5678", status: "running", duration: "0m 42s", cpu: "78%", memory: "1.8 GB" },
    { id: 3, name: "Subtitle Sync #9012", status: "completed", duration: "1m 33s", cpu: "32%", memory: "1.2 GB" },
  ];

  const mainPanel = (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, idx) => (
          <Card key={idx}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{metric.label}</CardTitle>
              <metric.icon className={`h-4 w-4 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-green-600 font-medium">{metric.change} from last week</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>System Health</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {systemHealth.map((sys, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${sys.status === "healthy" ? "bg-green-500" : "bg-orange-500"}`} />
                <div>
                  <p className="font-semibold">{sys.component}</p>
                  <p className="text-sm text-muted-foreground capitalize">{sys.status}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{sys.uptime}</p>
                <p className="text-xs text-muted-foreground">uptime</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Jobs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentJobs.map((job) => (
              <div key={job.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{job.name}</p>
                    <p className="text-sm text-muted-foreground">Duration: {job.duration}</p>
                  </div>
                  <span className={`text-sm px-3 py-1 rounded-full ${job.status === "completed" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>
                    {job.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">CPU Usage</p>
                    <p className="font-medium">{job.cpu}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Memory</p>
                    <p className="font-medium">{job.memory}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Resource Usage (Last 24h)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">CPU</span>
                <span className="text-muted-foreground">Average: 58%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-blue-600" style={{ width: "58%" }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">Memory</span>
                <span className="text-muted-foreground">Average: 6.2 GB</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-purple-600" style={{ width: "78%" }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">Storage</span>
                <span className="text-muted-foreground">Used: 145 GB / 500 GB</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-green-600" style={{ width: "29%" }} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <AppShell
      mode="dashboard"
      navbarChildren={<div className="font-semibold">Performance Monitor</div>}
      mainPanel={{ header: "System Performance", children: mainPanel }}
    />
  );
}
