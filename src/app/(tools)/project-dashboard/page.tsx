"use client";

import { AppShell } from "@/components/layout/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FolderOpen, Video, CheckCircle, Clock, AlertCircle, TrendingUp } from "lucide-react";

export default function ProjectDashboardPage() {
  const projects = [
    { id: 1, name: "Tutorial Series", videos: 12, status: "in-progress", progress: 75 },
    { id: 2, name: "Product Reviews", videos: 8, status: "completed", progress: 100 },
    { id: 3, name: "Q&A Sessions", videos: 15, status: "in-progress", progress: 60 },
  ];

  const stats = [
    { label: "Total Projects", value: "3", icon: FolderOpen, color: "text-blue-600" },
    { label: "Total Videos", value: "35", icon: Video, color: "text-purple-600" },
    { label: "Completed", value: "1", icon: CheckCircle, color: "text-green-600" },
    { label: "In Progress", value: "2", icon: Clock, color: "text-orange-600" },
  ];

  const recentActivity = [
    { action: "Video uploaded", project: "Tutorial Series", time: "2 hours ago" },
    { action: "Thumbnail updated", project: "Product Reviews", time: "5 hours ago" },
    { action: "Script completed", project: "Q&A Sessions", time: "1 day ago" },
  ];

  const upcomingTasks = [
    { task: "Edit Tutorial Part 5", project: "Tutorial Series", deadline: "Tomorrow", priority: "high" },
    { task: "Create Q&A thumbnail", project: "Q&A Sessions", deadline: "2 days", priority: "medium" },
    { task: "Upload review video", project: "Product Reviews", deadline: "3 days", priority: "low" },
  ];

  const mainPanel = (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, idx) => (
          <Card key={idx}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2">
              <FolderOpen className="h-5 w-5" />
              Active Projects
            </CardTitle>
            <Button size="sm">New Project</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">{project.name}</p>
                    <p className="text-sm text-muted-foreground">{project.videos} videos</p>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full ${project.status === "completed" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>
                    {project.status}
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    View Details
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Manage
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 border rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.project}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Upcoming Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingTasks.map((item, idx) => (
                <div key={idx} className="p-3 border rounded-lg space-y-2">
                  <div className="flex justify-between items-start">
                    <p className="text-sm font-medium">{item.task}</p>
                    <span className={`text-xs px-2 py-1 rounded ${item.priority === "high" ? "bg-red-100 text-red-700" : item.priority === "medium" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>
                      {item.priority}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{item.project}</p>
                  <p className="text-xs text-muted-foreground">Due: {item.deadline}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <AppShell
      mode="dashboard"
      navbarChildren={<div className="font-semibold">Project Dashboard</div>}
      mainPanel={{ header: "Overview", children: mainPanel }}
    />
  );
}
