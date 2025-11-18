"use client";

import { AppShell } from "@/components/layout/AppShell";

export default function HomePage() {
  return (
    <AppShell
      mode="three-pane"
      navbarChildren={
        <>
          <a href="/" className="text-sm font-medium hover:text-primary">
            Home
          </a>
          <a href="/tools" className="text-sm font-medium hover:text-primary">
            Tools
          </a>
        </>
      }
      leftPanel={{
        header: "Project Explorer",
        subHeader: "Browse your tools and resources",
        children: (
          <div className="space-y-2">
            <div className="rounded-md border p-3 hover:bg-accent">
              <div className="font-medium">Tool 1</div>
              <div className="text-xs text-muted-foreground">
                YouTube Uploader
              </div>
            </div>
            <div className="rounded-md border p-3 hover:bg-accent">
              <div className="font-medium">Tool 2</div>
              <div className="text-xs text-muted-foreground">
                Thumbnail Generator
              </div>
            </div>
            <div className="rounded-md border p-3 hover:bg-accent">
              <div className="font-medium">Tool 3</div>
              <div className="text-xs text-muted-foreground">
                Analytics Dashboard
              </div>
            </div>
          </div>
        ),
        footer: "3 tools available",
      }}
      mainPanel={{
        header: "Welcome to 25+ Tool Studio",
        subHeader: "YouTube Automation Platform",
        children: (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">
                25+ Tool Studio
              </h1>
              <p className="mt-2 text-muted-foreground">
                YouTube 자동화를 위한 통합 플랫폼입니다.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border p-6 hover:shadow-md">
                <h3 className="mb-2 font-semibold">YouTube Uploader</h3>
                <p className="text-sm text-muted-foreground">
                  영상을 자동으로 업로드하고 메타데이터를 관리합니다.
                </p>
              </div>

              <div className="rounded-lg border p-6 hover:shadow-md">
                <h3 className="mb-2 font-semibold">Thumbnail Generator</h3>
                <p className="text-sm text-muted-foreground">
                  AI 기반 썸네일을 자동으로 생성합니다.
                </p>
              </div>

              <div className="rounded-lg border p-6 hover:shadow-md">
                <h3 className="mb-2 font-semibold">Analytics Dashboard</h3>
                <p className="text-sm text-muted-foreground">
                  영상 성과를 실시간으로 모니터링합니다.
                </p>
              </div>

              <div className="rounded-lg border p-6 hover:shadow-md">
                <h3 className="mb-2 font-semibold">Script Generator</h3>
                <p className="text-sm text-muted-foreground">
                  AI로 영상 스크립트를 자동 생성합니다.
                </p>
              </div>

              <div className="rounded-lg border p-6 hover:shadow-md">
                <h3 className="mb-2 font-semibold">SEO Optimizer</h3>
                <p className="text-sm text-muted-foreground">
                  제목, 설명, 태그를 최적화합니다.
                </p>
              </div>

              <div className="rounded-lg border p-6 hover:shadow-md">
                <h3 className="mb-2 font-semibold">Workflow Automation</h3>
                <p className="text-sm text-muted-foreground">
                  전체 워크플로를 자동화합니다.
                </p>
              </div>
            </div>

            <div className="rounded-lg border bg-muted p-6">
              <h3 className="mb-2 font-semibold">Getting Started</h3>
              <ol className="list-decimal space-y-2 pl-6 text-sm">
                <li>좌측 패널에서 사용할 툴을 선택하세요</li>
                <li>각 툴의 설정을 구성하세요</li>
                <li>우측 패널에서 AI 명령을 실행하세요</li>
                <li>자동화를 시작하세요</li>
              </ol>
            </div>
          </div>
        ),
        footer: "© 2025 25+ Tool Studio",
      }}
      rightPanel={{
        header: "AI Assistant",
        subHeader: "Commands & Help",
        children: (
          <div className="space-y-4">
            <div className="rounded-md border p-3">
              <div className="mb-2 text-sm font-medium">Quick Commands</div>
              <div className="space-y-1 text-xs">
                <div className="text-muted-foreground">
                  • /upload - 영상 업로드
                </div>
                <div className="text-muted-foreground">
                  • /thumbnail - 썸네일 생성
                </div>
                <div className="text-muted-foreground">
                  • /analyze - 분석 실행
                </div>
              </div>
            </div>

            <div className="rounded-md border p-3">
              <div className="mb-2 text-sm font-medium">Recent Activity</div>
              <div className="text-xs text-muted-foreground">
                활동 내역이 없습니다.
              </div>
            </div>
          </div>
        ),
        footer: "AI Ready",
      }}
    />
  );
}
