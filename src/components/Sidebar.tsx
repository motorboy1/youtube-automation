'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ToolMetadata } from '@/types/tool';

interface SidebarProps {
  toolsByCategory: Record<string, ToolMetadata[]>;
}

export default function Sidebar({ toolsByCategory }: SidebarProps) {
  const pathname = usePathname();

  const formatCategoryName = (category: string) => {
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>
          <Link href="/">DanteLabs Tools</Link>
        </h2>
      </div>

      <nav className="sidebar-nav">
        {Object.entries(toolsByCategory).map(([category, tools]) => (
          <div key={category} className="category-section">
            <div className="category-title">{formatCategoryName(category)}</div>
            <ul className="tool-list">
              {tools.map(tool => (
                <li key={tool.toolId}>
                  <Link
                    href={`/${tool.toolId}`}
                    className={pathname === `/${tool.toolId}` ? 'active' : ''}
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <style jsx>{`
        .sidebar {
          width: 280px;
          height: 100vh;
          background: #1e293b;
          color: white;
          overflow-y: auto;
          position: fixed;
          left: 0;
          top: 0;
        }
        .sidebar-header {
          padding: 1.5rem;
          border-bottom: 1px solid #334155;
        }
        .sidebar-header h2 {
          margin: 0;
          font-size: 1.5rem;
          font-weight: 700;
        }
        .sidebar-header a {
          color: white;
          text-decoration: none;
        }
        .sidebar-nav {
          padding: 1rem 0;
        }
        .category-section {
          margin-bottom: 1.5rem;
        }
        .category-title {
          padding: 0.5rem 1.5rem;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          color: #94a3b8;
          letter-spacing: 0.05em;
        }
        .tool-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .tool-list li {
          margin: 0;
        }
        .tool-list a {
          display: block;
          padding: 0.75rem 1.5rem;
          color: #cbd5e1;
          text-decoration: none;
          font-size: 0.875rem;
          transition: all 0.2s;
        }
        .tool-list a:hover {
          background: #334155;
          color: white;
        }
        .tool-list a.active {
          background: #3b82f6;
          color: white;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
