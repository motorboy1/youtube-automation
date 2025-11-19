'use client';

import { ReactNode } from 'react';

interface IDELayoutProps {
  children: ReactNode;
  sidebar?: ReactNode;
}

export default function IDELayout({ children, sidebar }: IDELayoutProps) {
  return (
    <div className="ide-layout">
      {sidebar && <div className="ide-sidebar">{sidebar}</div>}
      <div className="ide-main">{children}</div>
      <style jsx>{`
        .ide-layout {
          display: flex;
          height: 100vh;
          background: #f8fafc;
        }
        .ide-sidebar {
          width: 300px;
          background: #ffffff;
          border-right: 1px solid #e2e8f0;
          overflow-y: auto;
        }
        .ide-main {
          flex: 1;
          overflow-y: auto;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
}
