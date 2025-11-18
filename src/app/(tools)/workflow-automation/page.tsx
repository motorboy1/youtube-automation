"use client";

import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Workflow, Play, Plus, Settings, Zap } from "lucide-react";

export default function WorkflowAutomationPage() {
  const workflows = [
    { id: 1, name: "Auto Upload & Publish", status: "active", runs: 45 },
    { id: 2, name: "Daily Analytics Report", status: "active", runs: 120 },
    { id: 3, name: "Thumbnail Generator", status: "paused", runs: 23 },
  ];

  const nodes = [
    { id: 1, type: "trigger", label: "New Video Upload", x: 50, y: 100 },
    { id: 2, type: "action", label: "Generate Thumbnail", x: 250, y: 100 },
    { id: 3, type: "action", label: "Optimize SEO", x: 450, y: 100 },
    { id: 4, type: "action", label: "Schedule Publish", x: 650, y: 100 },
  ];

  const leftPanel = (
    <div className="space-y-4">
      <Button className="w-full">
        <Plus className="h-4 w-4 mr-2" />
        New Workflow
      </Button>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Workflow className="h-5 w-5" />
            My Workflows
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {workflows.map((workflow) => (
            <div key={workflow.id} className="p-3 border rounded-lg cursor-pointer hover:bg-muted">
              <div className="flex justify-between items-start mb-2">
                <p className="font-semibold text-sm">{workflow.name}</p>
                <span className={`text-xs px-2 py-1 rounded ${workflow.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}>
                  {workflow.status}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">{workflow.runs} runs</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );

  const mainPanel = (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Workflow Canvas</CardTitle>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <Settings className="h-3 w-3 mr-1" />
                Configure
              </Button>
              <Button size="sm">
                <Play className="h-3 w-3 mr-1" />
                Run
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative h-96 border rounded-lg bg-muted/20 p-4">
            {nodes.map((node, idx) => (
              <div key={node.id} className="absolute">
                <div
                  className={`p-4 rounded-lg border-2 ${node.type === "trigger" ? "bg-blue-100 border-blue-500" : "bg-green-100 border-green-500"}`}
                  style={{ left: `${node.x}px`, top: `${node.y}px`, width: "150px" }}
                >
                  <p className="text-sm font-semibold">{node.label}</p>
                  <p className="text-xs text-muted-foreground capitalize">{node.type}</p>
                </div>
                {idx < nodes.length - 1 && (
                  <div
                    className="absolute h-0.5 bg-gray-400"
                    style={{
                      left: `${node.x + 150}px`,
                      top: `${node.y + 30}px`,
                      width: "100px",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Workflow Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {nodes.map((node, idx) => (
              <div key={node.id} className="flex items-center gap-3 p-3 border rounded-lg">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{node.label}</p>
                  <p className="text-sm text-muted-foreground capitalize">{node.type}</p>
                </div>
                <Button size="sm" variant="outline">
                  Edit
                </Button>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Add Step
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const bottomPanel = (
    <Tabs defaultValue="triggers" className="h-full">
      <TabsList>
        <TabsTrigger value="triggers">Triggers</TabsTrigger>
        <TabsTrigger value="actions">Actions</TabsTrigger>
        <TabsTrigger value="logs">Execution Logs</TabsTrigger>
      </TabsList>

      <TabsContent value="triggers" className="flex-1 p-4">
        <div className="grid grid-cols-3 gap-4">
          {["New Upload", "Schedule Time", "API Webhook", "File Change", "Manual Trigger"].map((trigger) => (
            <Card key={trigger} className="cursor-pointer hover:bg-muted">
              <CardContent className="p-4 text-center">
                <Zap className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                <p className="text-sm font-medium">{trigger}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="actions" className="flex-1 p-4">
        <div className="grid grid-cols-3 gap-4">
          {["Upload Video", "Generate Thumbnail", "Send Email", "Update Metadata", "Post to Social"].map((action) => (
            <Card key={action} className="cursor-pointer hover:bg-muted">
              <CardContent className="p-4 text-center">
                <Settings className="h-8 w-8 mx-auto mb-2 text-green-600" />
                <p className="text-sm font-medium">{action}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="logs" className="flex-1 p-4">
        <Card>
          <CardHeader>
            <CardTitle>Recent Executions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[
                { time: "2 min ago", status: "success", message: "Workflow completed" },
                { time: "15 min ago", status: "success", message: "Workflow completed" },
                { time: "1 hour ago", status: "failed", message: "Step 3 failed: timeout" },
              ].map((log, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 border rounded-lg">
                  <div className={`w-2 h-2 rounded-full ${log.status === "success" ? "bg-green-500" : "bg-red-500"}`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{log.message}</p>
                    <p className="text-xs text-muted-foreground">{log.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );

  return (
    <AppShell
      mode="ide"
      navbarChildren={<div className="font-semibold">Workflow Automation</div>}
      leftPanel={{ header: "Workflows", children: leftPanel }}
      mainPanel={{ header: "Editor", children: mainPanel }}
      bottomPanel={{ header: "Components", children: bottomPanel }}
    />
  );
}
