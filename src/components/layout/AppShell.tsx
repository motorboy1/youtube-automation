"use client";

import { useState } from "react";
import { TopNavbar } from "./panels/TopNavbar";
import { LayoutManager, LayoutMode } from "./LayoutManager";
import { Sidebar } from "./Sidebar";

interface AppShellProps {
  mode?: LayoutMode;
  navbarChildren?: React.ReactNode;
  leftPanel?: {
    header?: React.ReactNode;
    subHeader?: React.ReactNode;
    children: React.ReactNode;
    footer?: React.ReactNode;
  };
  mainPanel: {
    header?: React.ReactNode;
    subHeader?: React.ReactNode;
    children: React.ReactNode;
    footer?: React.ReactNode;
  };
  rightPanel?: {
    header?: React.ReactNode;
    subHeader?: React.ReactNode;
    children: React.ReactNode;
    footer?: React.ReactNode;
  };
  bottomPanel?: {
    header?: React.ReactNode;
    subHeader?: React.ReactNode;
    children: React.ReactNode;
    footer?: React.ReactNode;
  };
}

/**
 * AppShell Component
 * Part 1 절대 규칙: 모든 툴의 최상위 프레임
 *
 * 구조:
 * <AppShell>
 *   <TopNavbar />
 *   <LayoutManager>
 *     <LeftPanel />
 *     <MainPanel />
 *     <RightPanel />
 *     <BottomPanel />
 *   </LayoutManager>
 * </AppShell>
 *
 * 이 구조는 절대 변경되면 안 됨
 */
export function AppShell({
  mode = "three-pane",
  navbarChildren,
  leftPanel,
  mainPanel,
  rightPanel,
  bottomPanel,
}: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* TopNavbar - 고정 */}
      <TopNavbar onMenuClick={() => setSidebarOpen(true)}>{navbarChildren}</TopNavbar>

      {/* LayoutManager - 모드에 따라 패널 배치 */}
      <div className="flex-1 overflow-hidden">
        <LayoutManager
          mode={mode}
          leftPanel={leftPanel}
          mainPanel={mainPanel}
          rightPanel={rightPanel}
          bottomPanel={bottomPanel}
        />
      </div>
    </div>
  );
}
