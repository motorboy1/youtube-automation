"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Save, FileText, Clock, BarChart3 } from "lucide-react";

/**
 * YouTube Script Editor Tool
 * Part 1 규칙: AppShell + ide 모드
 * Part 2 규칙: GI + MDA 분석 적용
 * IDE 모드: LeftPanel + MainPanel + BottomPanel (RightPanel 없음)
 */

interface ScriptFile {
  id: string;
  title: string;
  content: string;
  lastModified: string;
  status: "draft" | "final";
}

export default function ScriptEditorPage() {
  const [scripts] = useState<ScriptFile[]>([
    {
      id: "1",
      title: "How to Master YouTube SEO",
      content:
        "Introduction:\nHello everyone! Today we're going to dive deep into YouTube SEO...\n\nMain Content:\n1. Keyword Research\n   - Use tools like TubeBuddy\n   - Analyze competitor videos\n\n2. Optimize Your Title\n   - Include primary keyword\n   - Keep it under 60 characters\n\n3. Write Compelling Descriptions\n   - First 2-3 lines are crucial\n   - Include timestamps\n\nConclusion:\nThat's it for today! If you found this helpful, don't forget to subscribe!",
      lastModified: "2025-11-18",
      status: "draft",
    },
    {
      id: "2",
      title: "Best Video Editing Tips",
      content:
        "Hey creators! Let's talk about video editing tips that will transform your content...\n\nTip 1: Use Jump Cuts\nTip 2: Add B-Roll\nTip 3: Color Grading\nTip 4: Sound Design\nTip 5: Pacing",
      lastModified: "2025-11-17",
      status: "final",
    },
    {
      id: "3",
      title: "Monetization Guide 2024",
      content: "Welcome to the ultimate monetization guide...",
      lastModified: "2025-11-15",
      status: "draft",
    },
  ]);

  const [selectedScript, setSelectedScript] = useState<ScriptFile>(scripts[0]);
  const [scriptContent, setScriptContent] = useState<string>(
    selectedScript.content
  );

  const handleScriptSelect = (script: ScriptFile) => {
    setSelectedScript(script);
    setScriptContent(script.content);
  };

  const handleSave = () => {
    alert("Script saved successfully! (Demo mode)");
  };

  // Statistics
  const charCount = scriptContent.length;
  const wordCount = scriptContent.trim().split(/\s+/).length;
  const lineCount = scriptContent.split("\n").length;
  const estimatedMinutes = Math.ceil(wordCount / 150); // 평균 말하기 속도: 150 words/min

  return (
    <AppShell
      mode="ide"
      navbarChildren={
        <>
          <a href="/" className="text-sm font-medium hover:text-primary">
            Home
          </a>
          <a
            href="/youtube-uploader"
            className="text-sm font-medium hover:text-primary"
          >
            YouTube Uploader
          </a>
          <a
            href="/analytics-dashboard"
            className="text-sm font-medium hover:text-primary"
          >
            Analytics
          </a>
          <a
            href="/script-editor"
            className="text-sm font-medium text-primary"
          >
            Script Editor
          </a>
        </>
      }
      leftPanel={{
        header: "Scripts",
        subHeader: "Your video scripts",
        children: (
          <div className="space-y-2">
            {scripts.map((script) => (
              <Card
                key={script.id}
                className={`cursor-pointer p-3 transition-colors hover:bg-accent ${
                  selectedScript.id === script.id
                    ? "border-primary bg-accent"
                    : ""
                }`}
                onClick={() => handleScriptSelect(script)}
              >
                <div className="flex items-start gap-2">
                  <FileText className="mt-1 h-4 w-4 text-muted-foreground" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">{script.title}</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {script.lastModified}
                    </div>
                    <div className="mt-1">
                      <span
                        className={`text-xs ${
                          script.status === "final"
                            ? "text-green-600"
                            : "text-yellow-600"
                        }`}
                      >
                        {script.status === "final" ? "FINAL" : "DRAFT"}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ),
        footer: `${scripts.length} scripts`,
      }}
      mainPanel={{
        header: "Script Editor",
        subHeader: selectedScript.title,
        children: (
          <div className="flex h-full flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Last modified: {selectedScript.lastModified}
              </div>
              <Button onClick={handleSave} size="sm">
                <Save className="mr-2 h-4 w-4" />
                Save
              </Button>
            </div>
            <Textarea
              value={scriptContent}
              onChange={(e) => setScriptContent(e.target.value)}
              placeholder="Start writing your script here..."
              className="flex-1 resize-none font-mono text-sm"
              rows={20}
            />
          </div>
        ),
        footer: `${charCount} characters • ${wordCount} words • ${lineCount} lines`,
      }}
      bottomPanel={{
        header: "Preview & Tools",
        subHeader: "Script analysis and suggestions",
        children: (
          <Tabs defaultValue="preview" className="w-full">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="ai">AI Suggestions</TabsTrigger>
              <TabsTrigger value="stats">Statistics</TabsTrigger>
            </TabsList>

            <TabsContent value="preview" className="space-y-2">
              <div className="rounded-md border bg-muted p-4">
                <h3 className="mb-2 font-semibold">Script Preview</h3>
                <div className="whitespace-pre-wrap text-sm">
                  {scriptContent || "No content to preview"}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ai" className="space-y-2">
              <Card className="p-4">
                <h3 className="mb-2 font-semibold">AI Suggestions</h3>
                <div className="space-y-3">
                  <div className="rounded-md border p-3">
                    <div className="mb-1 text-sm font-medium">
                      💡 Add a Hook
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Start with a compelling question or statistic to grab
                      attention in the first 5 seconds.
                    </div>
                  </div>
                  <div className="rounded-md border p-3">
                    <div className="mb-1 text-sm font-medium">
                      📝 Improve Structure
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Consider adding more subheadings to break up long
                      sections and improve readability.
                    </div>
                  </div>
                  <div className="rounded-md border p-3">
                    <div className="mb-1 text-sm font-medium">
                      🎯 Call to Action
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Add a clear CTA at the end: subscribe, like, or check the
                      description.
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="stats" className="space-y-2">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="p-4">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-2xl font-bold">{wordCount}</div>
                      <div className="text-sm text-muted-foreground">
                        Words
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-2xl font-bold">
                        ~{estimatedMinutes} min
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Estimated Time
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-2xl font-bold">{charCount}</div>
                      <div className="text-sm text-muted-foreground">
                        Characters
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-2xl font-bold">{lineCount}</div>
                      <div className="text-sm text-muted-foreground">
                        Lines
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-4">
                <h3 className="mb-2 font-semibold">Readability Analysis</h3>
                <div className="space-y-2">
                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span>Clarity</span>
                      <span className="font-medium">85%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full bg-green-500"
                        style={{ width: "85%" }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span>Engagement</span>
                      <span className="font-medium">72%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full bg-blue-500"
                        style={{ width: "72%" }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span>Structure</span>
                      <span className="font-medium">90%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full bg-purple-500"
                        style={{ width: "90%" }}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        ),
        footer: "IDE Mode: BottomPanel Active",
      }}
    />
  );
}
