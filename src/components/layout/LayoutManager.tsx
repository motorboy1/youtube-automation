"use client";

import { LeftPanel } from "./panels/LeftPanel";
import { MainPanel } from "./panels/MainPanel";
import { RightPanel } from "./panels/RightPanel";
import { BottomPanel } from "./panels/BottomPanel";

export type LayoutMode = "three-pane" | "ide" | "dashboard";

interface LayoutManagerProps {
  mode: LayoutMode;
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
 * LayoutManager Component
 * Part 1 핵심 규칙: 3가지 모드를 전환하는 레이아웃 매니저
 *
 * 모드별 특징:
 * - three-pane: 좌측(파일) + 중앙(콘텐츠) + 우측(AI/명령)
 * - ide: 좌측(파일) + 중앙(코드) + 하단(로그/터미널)
 * - dashboard: 중앙 중심 (카드/그래프/리포트)
 */
export function LayoutManager({
  mode,
  leftPanel,
  mainPanel,
  rightPanel,
  bottomPanel,
}: LayoutManagerProps) {
  // 모드별 패널 가시성 결정
  const getVisibility = () => {
    switch (mode) {
      case "three-pane":
        return {
          left: true,
          right: true,
          bottom: false,
        };
      case "ide":
        return {
          left: true,
          right: false,
          bottom: true,
        };
      case "dashboard":
        return {
          left: false,
          right: false,
          bottom: false,
        };
      default:
        return {
          left: true,
          right: true,
          bottom: false,
        };
    }
  };

  const visibility = getVisibility();

  return (
    <div className="flex h-full flex-col">
      {/* 상단 영역: Left + Main + Right */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel */}
        {leftPanel && (
          <LeftPanel
            isVisible={visibility.left}
            header={leftPanel.header}
            subHeader={leftPanel.subHeader}
            footer={leftPanel.footer}
          >
            {leftPanel.children}
          </LeftPanel>
        )}

        {/* Main Panel */}
        <MainPanel
          header={mainPanel.header}
          subHeader={mainPanel.subHeader}
          footer={mainPanel.footer}
        >
          {mainPanel.children}
        </MainPanel>

        {/* Right Panel */}
        {rightPanel && (
          <RightPanel
            isVisible={visibility.right}
            header={rightPanel.header}
            subHeader={rightPanel.subHeader}
            footer={rightPanel.footer}
          >
            {rightPanel.children}
          </RightPanel>
        )}
      </div>

      {/* Bottom Panel (IDE 모드에서만 표시) */}
      {bottomPanel && (
        <BottomPanel
          isVisible={visibility.bottom}
          header={bottomPanel.header}
          subHeader={bottomPanel.subHeader}
          footer={bottomPanel.footer}
        >
          {bottomPanel.children}
        </BottomPanel>
      )}
    </div>
  );
}
