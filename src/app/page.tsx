'use client';

import { getAllTools, getToolsByCategory } from '@/lib/tools';
import ToolCard from '@/components/ToolCard';
import Sidebar from '@/components/Sidebar';

export default function HomePage() {
  const tools = getAllTools();
  const toolsByCategory = getToolsByCategory();

  const formatCategoryName = (category: string) => {
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="home-layout">
      <Sidebar toolsByCategory={toolsByCategory} />
      <main className="home-main">
        <header className="home-header">
          <h1>DanteLabs YouTube Automation Suite</h1>
          <p>
            Comprehensive collection of AI-powered tools for YouTube content
            creation, optimization, and analytics.
          </p>
        </header>

        <div className="tools-section">
          {Object.entries(toolsByCategory).map(([category, categoryTools]) => (
            <section key={category} className="category-section">
              <h2>{formatCategoryName(category)}</h2>
              <div className="tools-grid">
                {categoryTools.map(tool => (
                  <ToolCard key={tool.toolId} tool={tool} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <style jsx>{`
        .home-layout {
          display: flex;
          min-height: 100vh;
          background: #f8fafc;
        }
        .home-main {
          margin-left: 280px;
          flex: 1;
          padding: 3rem;
        }
        .home-header {
          margin-bottom: 3rem;
        }
        .home-header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1rem;
        }
        .home-header p {
          font-size: 1.125rem;
          color: #475569;
          max-width: 700px;
        }
        .tools-section {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        .category-section h2 {
          font-size: 1.75rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 1.5rem;
        }
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 1.5rem;
        }
      `}</style>
    </div>
  );
}
