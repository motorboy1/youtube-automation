'use client';

import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="dashboard-layout">
      <div className="dashboard-content">{children}</div>
      <style jsx>{`
        .dashboard-layout {
          min-height: 100vh;
          background: #f1f5f9;
        }
        .dashboard-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
}
