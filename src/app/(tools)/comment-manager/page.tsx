"use client";

import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare, Heart, Flag, Reply, Search } from "lucide-react";

export default function CommentManagerPage() {
  const comments = [
    { id: 1, author: "John Doe", text: "Great video! Very helpful!", likes: 23, time: "2 hours ago", replied: false },
    { id: 2, author: "Jane Smith", text: "Could you make a follow-up video?", likes: 15, time: "5 hours ago", replied: true },
    { id: 3, author: "Bob Wilson", text: "This saved me so much time, thanks!", likes: 41, time: "1 day ago", replied: false },
    { id: 4, author: "Alice Brown", text: "Amazing content as always!", likes: 8, time: "1 day ago", replied: true },
  ];

  const stats = [
    { label: "Total Comments", value: "1,247", icon: MessageSquare, color: "text-blue-600" },
    { label: "Pending Review", value: "23", icon: Flag, color: "text-orange-600" },
    { label: "Replied", value: "892", icon: Reply, color: "text-green-600" },
    { label: "Total Likes", value: "3,421", icon: Heart, color: "text-red-600" },
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
          <div className="flex items-center justify-between">
            <CardTitle>Recent Comments</CardTitle>
            <div className="flex items-center gap-2">
              <Input placeholder="Search comments..." className="w-64" />
              <Button variant="outline" size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold">{comment.author}</p>
                    <p className="text-sm text-muted-foreground">{comment.time}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{comment.likes}</span>
                  </div>
                </div>
                <p className="text-sm">{comment.text}</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Reply className="h-3 w-3 mr-1" />
                    Reply
                  </Button>
                  {!comment.replied && (
                    <Button size="sm" variant="outline">
                      <Heart className="h-3 w-3 mr-1" />
                      Like
                    </Button>
                  )}
                  {comment.replied && (
                    <span className="text-xs text-green-600 flex items-center px-2">
                      <Reply className="h-3 w-3 mr-1" />
                      Replied
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <AppShell
      mode="dashboard"
      navbarChildren={<div className="font-semibold">Comment Manager</div>}
      mainPanel={{ header: "Comment Management", children: mainPanel }}
    />
  );
}
