'use client';

import { getToolMetadata } from '@/lib/tools';
import IDELayout from '@/components/layouts/IDELayout';

export default function SEOOptimizerPage() {
  const tool = getToolMetadata('seo-optimizer');

  if (!tool) {
    return <div>Tool not found</div>;
  }

  return (
    <IDELayout
      sidebar={
        <div className="sidebar-content">
          <h3>Input</h3>
          {Object.entries(tool.inputs).map(([key, input]) => (
            <div key={key} className="field">
              <label>{key}</label>
              {input.type === 'textarea' ? (
                <textarea placeholder={input.placeholder} rows={4} />
              ) : input.type === 'text[]' ? (
                <input type="text" placeholder="Comma-separated" />
              ) : (
                <input type="text" placeholder={input.placeholder} />
              )}
            </div>
          ))}
          <button className="optimize-btn">Optimize SEO</button>
          <style jsx>{`
            .sidebar-content {
              padding: 1.5rem;
            }
            h3 {
              font-size: 1.125rem;
              font-weight: 600;
              margin-bottom: 1rem;
            }
            .field {
              margin-bottom: 1rem;
            }
            label {
              display: block;
              font-size: 0.875rem;
              font-weight: 500;
              margin-bottom: 0.5rem;
              color: #475569;
            }
            input,
            textarea {
              width: 100%;
              padding: 0.5rem;
              border: 1px solid #cbd5e1;
              border-radius: 0.375rem;
              font-size: 0.875rem;
              font-family: inherit;
            }
            .optimize-btn {
              width: 100%;
              padding: 0.75rem;
              background: #3b82f6;
              color: white;
              border: none;
              border-radius: 0.375rem;
              font-weight: 500;
              cursor: pointer;
            }
          `}</style>
        </div>
      }
    >
      <div className="results-content">
        <h1>{tool.name}</h1>
        <p className="description">{tool.description}</p>

        <div className="score-card">
          <h2>SEO Score</h2>
          <div className="score-display">
            <div className="score-circle">--</div>
            <p>Run optimization to see your score</p>
          </div>
        </div>

        <div className="results-section">
          <h2>Optimized Title</h2>
          <div className="result-box">
            <p className="placeholder">Optimized title will appear here...</p>
          </div>
        </div>

        <div className="results-section">
          <h2>Optimized Description</h2>
          <div className="result-box">
            <p className="placeholder">Optimized description will appear here...</p>
          </div>
        </div>

        <div className="results-section">
          <h2>Recommended Tags</h2>
          <div className="result-box">
            <p className="placeholder">Recommended tags will appear here...</p>
          </div>
        </div>

        <div className="results-section">
          <h2>Improvements</h2>
          <div className="result-box">
            <ul className="improvements-list">
              <li className="placeholder">Suggestions will appear here...</li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .results-content {
          padding: 2rem;
          max-width: 900px;
        }
        h1 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #1e293b;
        }
        .description {
          font-size: 1rem;
          color: #475569;
          margin-bottom: 2rem;
        }
        .score-card {
          background: white;
          padding: 2rem;
          border-radius: 0.5rem;
          margin-bottom: 2rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        .score-card h2 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .score-display {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .score-circle {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: 700;
          color: #64748b;
        }
        .results-section {
          margin-bottom: 2rem;
        }
        .results-section h2 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1e293b;
        }
        .result-box {
          background: white;
          padding: 1.5rem;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        .placeholder {
          color: #94a3b8;
          font-style: italic;
        }
        .improvements-list {
          list-style: none;
          padding: 0;
        }
      `}</style>
    </IDELayout>
  );
}
