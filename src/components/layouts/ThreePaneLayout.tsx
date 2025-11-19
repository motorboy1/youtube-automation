'use client';

import { ReactNode } from 'react';

interface ThreePaneLayoutProps {
  leftPane: ReactNode;
  centerPane: ReactNode;
  rightPane: ReactNode;
}

export default function ThreePaneLayout({
  leftPane,
  centerPane,
  rightPane,
}: ThreePaneLayoutProps) {
  return (
    <div className="three-pane-layout">
      <div className="pane left-pane">{leftPane}</div>
      <div className="pane center-pane">{centerPane}</div>
      <div className="pane right-pane">{rightPane}</div>
      <style jsx>{`
        .three-pane-layout {
          display: grid;
          grid-template-columns: 300px 1fr 350px;
          height: 100vh;
          background: #f8fafc;
        }
        .pane {
          overflow-y: auto;
          border-right: 1px solid #e2e8f0;
        }
        .pane:last-child {
          border-right: none;
        }
        .left-pane {
          background: #ffffff;
          padding: 1.5rem;
        }
        .center-pane {
          background: #ffffff;
          padding: 2rem;
        }
        .right-pane {
          background: #f8fafc;
          padding: 1.5rem;
        }
      `}</style>
    </div>
  );
}
