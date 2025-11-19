'use client';

import { getToolMetadata, getToolDocumentation } from '@/lib/tools';
import IDELayout from '@/components/layouts/IDELayout';

export default function BulkVideoUploaderPage() {
  const tool = getToolMetadata('bulk-video-uploader');
  const docs = getToolDocumentation('bulk-video-uploader');

  if (!tool) {
    return <div>Tool not found</div>;
  }

  return (
    <IDELayout
      sidebar={
        <div className="tool-sidebar">
          <h3>Configuration</h3>
          <div className="input-section">
            {Object.entries(tool.inputs).map(([key, input]) => (
              <div key={key} className="input-field">
                <label>{key}</label>
                <input
                  type={input.type === 'file[]' ? 'file' : input.type}
                  placeholder={input.placeholder}
                  required={input.required}
                  multiple={input.type === 'file[]'}
                />
              </div>
            ))}
          </div>
          <button className="run-button">Upload Videos</button>
          <style jsx>{`
            .tool-sidebar {
              padding: 1.5rem;
            }
            h3 {
              font-size: 1.25rem;
              font-weight: 600;
              margin-bottom: 1.5rem;
              color: #1e293b;
            }
            .input-section {
              display: flex;
              flex-direction: column;
              gap: 1rem;
              margin-bottom: 1.5rem;
            }
            .input-field {
              display: flex;
              flex-direction: column;
              gap: 0.5rem;
            }
            label {
              font-size: 0.875rem;
              font-weight: 500;
              color: #475569;
            }
            input {
              padding: 0.5rem;
              border: 1px solid #cbd5e1;
              border-radius: 0.375rem;
              font-size: 0.875rem;
            }
            .run-button {
              width: 100%;
              padding: 0.75rem;
              background: #3b82f6;
              color: white;
              border: none;
              border-radius: 0.375rem;
              font-weight: 500;
              cursor: pointer;
              transition: background 0.2s;
            }
            .run-button:hover {
              background: #2563eb;
            }
          `}</style>
        </div>
      }
    >
      <div className="tool-content">
        <div className="tool-header">
          <h1>{tool.name}</h1>
          <span className="version">v{tool.version}</span>
        </div>
        <p className="description">{tool.description}</p>

        <section className="features-section">
          <h2>Features</h2>
          <ul>
            {tool.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </section>

        {docs && (
          <section className="docs-section">
            <div dangerouslySetInnerHTML={{ __html: docs.replace(/\n/g, '<br/>') }} />
          </section>
        )}

        <section className="output-section">
          <h2>Output Preview</h2>
          <div className="output-placeholder">
            <p>Upload results will appear here...</p>
          </div>
        </section>
      </div>

      <style jsx>{`
        .tool-content {
          max-width: 900px;
        }
        .tool-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        .tool-header h1 {
          font-size: 2rem;
          font-weight: 700;
          color: #1e293b;
        }
        .version {
          font-size: 0.875rem;
          color: #64748b;
          background: #f1f5f9;
          padding: 0.375rem 0.75rem;
          border-radius: 0.375rem;
        }
        .description {
          font-size: 1.125rem;
          color: #475569;
          line-height: 1.75;
          margin-bottom: 2rem;
        }
        .features-section,
        .docs-section,
        .output-section {
          margin-bottom: 2rem;
        }
        h2 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 1rem;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          padding: 0.75rem 0;
          border-bottom: 1px solid #e2e8f0;
          color: #475569;
        }
        li:before {
          content: '✓ ';
          color: #10b981;
          font-weight: bold;
          margin-right: 0.5rem;
        }
        .output-placeholder {
          padding: 2rem;
          background: #f8fafc;
          border: 2px dashed #cbd5e1;
          border-radius: 0.5rem;
          text-align: center;
          color: #94a3b8;
        }
      `}</style>
    </IDELayout>
  );
}
