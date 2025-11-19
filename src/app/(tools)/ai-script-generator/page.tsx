'use client';

import { getToolMetadata, getToolDocumentation } from '@/lib/tools';
import ThreePaneLayout from '@/components/layouts/ThreePaneLayout';

export default function AIScriptGeneratorPage() {
  const tool = getToolMetadata('ai-script-generator');
  const docs = getToolDocumentation('ai-script-generator');

  if (!tool) {
    return <div>Tool not found</div>;
  }

  return (
    <ThreePaneLayout
      leftPane={
        <div className="config-pane">
          <h3>Settings</h3>
          {Object.entries(tool.inputs).map(([key, input]) => (
            <div key={key} className="field">
              <label>{key}</label>
              {input.type === 'select' ? (
                <select>
                  {input.options?.map(opt => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : input.type === 'text[]' ? (
                <input type="text" placeholder="Comma-separated values" />
              ) : (
                <input
                  type={input.type}
                  placeholder={input.placeholder}
                  required={input.required}
                />
              )}
            </div>
          ))}
          <button className="generate-btn">Generate Script</button>
          <style jsx>{`
            .config-pane {
              padding: 1rem;
            }
            h3 {
              font-size: 1.125rem;
              font-weight: 600;
              margin-bottom: 1rem;
              color: #1e293b;
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
            select {
              width: 100%;
              padding: 0.5rem;
              border: 1px solid #cbd5e1;
              border-radius: 0.375rem;
              font-size: 0.875rem;
            }
            .generate-btn {
              width: 100%;
              padding: 0.75rem;
              background: #3b82f6;
              color: white;
              border: none;
              border-radius: 0.375rem;
              font-weight: 500;
              cursor: pointer;
              margin-top: 1rem;
            }
          `}</style>
        </div>
      }
      centerPane={
        <div className="script-pane">
          <h1>{tool.name}</h1>
          <div className="script-output">
            <div className="section">
              <h3>Hook</h3>
              <p className="placeholder">Generated hook will appear here...</p>
            </div>
            <div className="section">
              <h3>Introduction</h3>
              <p className="placeholder">Generated introduction will appear here...</p>
            </div>
            <div className="section">
              <h3>Main Content</h3>
              <p className="placeholder">Generated main content will appear here...</p>
            </div>
            <div className="section">
              <h3>Call to Action</h3>
              <p className="placeholder">Generated CTA will appear here...</p>
            </div>
          </div>
          <style jsx>{`
            .script-pane {
              padding: 2rem;
            }
            h1 {
              font-size: 2rem;
              font-weight: 700;
              margin-bottom: 2rem;
              color: #1e293b;
            }
            .script-output {
              display: flex;
              flex-direction: column;
              gap: 2rem;
            }
            .section h3 {
              font-size: 1.25rem;
              font-weight: 600;
              margin-bottom: 0.75rem;
              color: #1e293b;
            }
            .placeholder {
              color: #94a3b8;
              font-style: italic;
              padding: 1rem;
              background: #f8fafc;
              border-radius: 0.375rem;
            }
          `}</style>
        </div>
      }
      rightPane={
        <div className="info-pane">
          <h3>About</h3>
          <p className="description">{tool.description}</p>
          <h3>Features</h3>
          <ul>
            {tool.features.map((f, idx) => (
              <li key={idx}>{f}</li>
            ))}
          </ul>
          <style jsx>{`
            .info-pane {
              padding: 1rem;
            }
            h3 {
              font-size: 1rem;
              font-weight: 600;
              margin: 1.5rem 0 0.75rem;
              color: #1e293b;
            }
            h3:first-child {
              margin-top: 0;
            }
            .description {
              font-size: 0.875rem;
              color: #475569;
              line-height: 1.6;
            }
            ul {
              list-style: none;
              padding: 0;
              font-size: 0.875rem;
            }
            li {
              padding: 0.5rem 0;
              color: #475569;
              border-bottom: 1px solid #e2e8f0;
            }
          `}</style>
        </div>
      }
    />
  );
}
