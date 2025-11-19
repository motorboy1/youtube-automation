'use client';

import Link from 'next/link';
import { ToolMetadata } from '@/types/tool';

interface ToolCardProps {
  tool: ToolMetadata;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link href={`/${tool.toolId}`} className="tool-card">
      <div className="tool-card-header">
        <h3>{tool.name}</h3>
        <span className="tool-version">v{tool.version}</span>
      </div>
      <p className="tool-description">{tool.description}</p>
      <div className="tool-features">
        {tool.features.slice(0, 3).map((feature, idx) => (
          <span key={idx} className="feature-tag">
            {feature}
          </span>
        ))}
      </div>
      <div className="tool-footer">
        <span className="layout-badge">{tool.layoutMode}</span>
        <span className="category-badge">{tool.category}</span>
      </div>
      <style jsx>{`
        .tool-card {
          display: block;
          padding: 1.5rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          background: white;
          transition: all 0.2s;
          text-decoration: none;
          color: inherit;
        }
        .tool-card:hover {
          border-color: #3b82f6;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }
        .tool-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }
        .tool-card-header h3 {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 600;
          color: #1e293b;
        }
        .tool-version {
          font-size: 0.75rem;
          color: #64748b;
          background: #f1f5f9;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
        }
        .tool-description {
          color: #475569;
          font-size: 0.875rem;
          line-height: 1.5;
          margin-bottom: 1rem;
        }
        .tool-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .feature-tag {
          font-size: 0.75rem;
          color: #1e40af;
          background: #dbeafe;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
        }
        .tool-footer {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
        }
        .layout-badge {
          color: #16a34a;
          background: #dcfce7;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-weight: 500;
        }
        .category-badge {
          color: #9333ea;
          background: #f3e8ff;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
        }
      `}</style>
    </Link>
  );
}
