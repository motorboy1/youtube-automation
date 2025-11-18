"use client";

import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MessageSquare, FileText, CheckCircle, Clock } from "lucide-react";

export default function CollaborationHubPage() {
  const team = [
    { name: "John Doe", role: "Editor", status: "online", tasks: 3 },
    { name: "Jane Smith", role: "Designer", status: "offline", tasks: 2 },
    { name: "Bob Wilson", role: "Writer", status: "online", tasks: 5 },
  ];

  const tasks = [
    { id: 1, title: "Edit intro video", assignee: "John Doe", status: "in-progress", priority: "high" },
    { id: 2, title: "Create thumbnail", assignee: "Jane Smith", status: "pending", priority: "medium" },
    { id: 3, title: "Write script", assignee: "Bob Wilson", status: "completed", priority: "high" },
  ];

  const messages = [
    { user: "John Doe", message: "Video editing is almost done!", time: "5m ago" },
    { user: "Bob Wilson", message: "Script uploaded to shared folder", time: "1h ago" },
  ];

  const mainPanel = (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Team Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{team.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tasks.filter((t) => t.status !== "completed").length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{tasks.filter((t) => t.status === "completed").length}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Team Members
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {team.map((member, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${member.status === "online" ? "bg-green-500" : "bg-gray-300"}`} />
                  <div>
                    <p className="font-semibold">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">{member.tasks} tasks</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Recent Messages
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {messages.map((msg, idx) => (
              <div key={idx} className="p-3 border rounded-lg">
                <div className="flex justify-between mb-1">
                  <span className="font-semibold text-sm">{msg.user}</span>
                  <span className="text-xs text-muted-foreground">{msg.time}</span>
                </div>
                <p className="text-sm">{msg.message}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Task Board
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                {task.status === "completed" ? (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                ) : (
                  <Clock className="h-5 w-5 text-blue-600" />
                )}
                <div>
                  <p className="font-semibold">{task.title}</p>
                  <p className="text-sm text-muted-foreground">Assigned to: {task.assignee}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className={`text-xs px-2 py-1 rounded ${task.priority === "high" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`}>
                  {task.priority}
                </span>
                <span className="text-xs px-2 py-1 rounded bg-muted capitalize">{task.status}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );

  return (
    <AppShell
      mode="dashboard"
      navbarChildren={<div className="font-semibold">Collaboration Hub</div>}
      mainPanel={{ header: "Team Dashboard", children: mainPanel }}
    />
  );
}
