"use client";

import { AppShell } from "@/components/layout/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TestTube, Eye, ThumbsUp, TrendingUp } from "lucide-react";

export default function ABTestManagerPage() {
  const tests = [
    {
      id: 1,
      name: "Thumbnail Test",
      variantA: { name: "Bold Text", ctr: 8.5, views: 12500 },
      variantB: { name: "Minimal", ctr: 12.3, views: 13200 },
      status: "active",
    },
    {
      id: 2,
      name: "Title Test",
      variantA: { name: "Tutorial", ctr: 6.2, views: 8900 },
      variantB: { name: "Complete Guide", ctr: 9.8, views: 11200 },
      status: "active",
    },
  ];

  const mainPanel = (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Tests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg Improvement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">+34%</div>
          </CardContent>
        </Card>
      </div>

      {tests.map((test) => (
        <Card key={test.id}>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="flex items-center gap-2">
                <TestTube className="h-5 w-5" />
                {test.name}
              </CardTitle>
              <span className="text-sm px-3 py-1 bg-green-100 text-green-700 rounded-full">
                {test.status}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">Variant A</h4>
                  <span className="text-sm text-muted-foreground">{test.variantA.name}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">CTR</span>
                    <span className="font-bold">{test.variantA.ctr}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Views</span>
                    <span className="font-bold">{test.variantA.views.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="border-2 border-green-500 rounded-lg p-4 space-y-3 bg-green-50">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">Variant B</h4>
                  <span className="text-sm text-green-700 font-medium">Winner</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">CTR</span>
                    <span className="font-bold text-green-700">{test.variantB.ctr}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Views</span>
                    <span className="font-bold text-green-700">{test.variantB.views.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <Button size="sm" variant="outline">View Details</Button>
              <Button size="sm" variant="outline">Apply Winner</Button>
              <Button size="sm" variant="outline">End Test</Button>
            </div>
          </CardContent>
        </Card>
      ))}

      <Button className="w-full">
        <TestTube className="h-4 w-4 mr-2" />
        Create New Test
      </Button>
    </div>
  );

  return (
    <AppShell
      mode="dashboard"
      navbarChildren={<div className="font-semibold">A/B Test Manager</div>}
      mainPanel={{ header: "A/B Testing Dashboard", children: mainPanel }}
    />
  );
}
