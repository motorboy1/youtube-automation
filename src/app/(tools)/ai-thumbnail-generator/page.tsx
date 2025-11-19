'use client';

import { getToolMetadata } from '@/lib/tools';
import ThreePaneLayout from '@/components/layouts/ThreePaneLayout';

export default function AIThumbnailGeneratorPage() {
  const tool = getToolMetadata('ai-thumbnail-generator');

  if (!tool) {
    return <div>Tool not found</div>;
  }

  return (
    <ThreePaneLayout
      leftPane={
        <div className="settings-pane">
          <h3>Settings</h3>
          {Object.entries(tool.inputs).map(([key, input]) => (
            <div key={key} className="field">
              <label>{key}</label>
              {input.type === 'file' ? (
                <input type="file" accept={input.accept} />
              ) : input.type === 'select' ? (
                <select>
                  {input.options?.map(opt => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input type="text" placeholder={input.placeholder} maxLength={input.maxLength} />
              )}
            </div>
          ))}
          <button className="generate-btn">Generate Thumbnails</button>
          <style jsx>{`
            .settings-pane h3 {
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
        <div className="preview-pane">
          <h1>{tool.name}</h1>
          <div className="thumbnail-grid">
            {[1, 2, 3, 4].map(idx => (
              <div key={idx} className="thumbnail-preview">
                <div className="thumbnail-placeholder">
                  <span>Variant {idx}</span>
                </div>
                <div className="thumbnail-info">
                  <span className="ctr-badge">CTR: --</span>
                  <button className="download-btn">Download</button>
                </div>
              </div>
            ))}
          </div>
          <style jsx>{`
            .preview-pane h1 {
              font-size: 2rem;
              font-weight: 700;
              margin-bottom: 2rem;
              color: #1e293b;
            }
            .thumbnail-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 1.5rem;
            }
            .thumbnail-preview {
              display: flex;
              flex-direction: column;
              gap: 0.75rem;
            }
            .thumbnail-placeholder {
              aspect-ratio: 16/9;
              background: #f1f5f9;
              border-radius: 0.5rem;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #94a3b8;
              font-weight: 500;
            }
            .thumbnail-info {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            .ctr-badge {
              font-size: 0.875rem;
              color: #64748b;
              background: #f1f5f9;
              padding: 0.25rem 0.5rem;
              border-radius: 0.25rem;
            }
            .download-btn {
              padding: 0.5rem 1rem;
              background: #10b981;
              color: white;
              border: none;
              border-radius: 0.375rem;
              font-size: 0.875rem;
              cursor: pointer;
            }
          `}</style>
        </div>
      }
      rightPane={
        <div className="tips-pane">
          <h3>Design Tips</h3>
          <ul className="tips-list">
            <li>Use high contrast colors</li>
            <li>Keep text large and readable</li>
            <li>Include faces with emotions</li>
            <li>Avoid clutter</li>
            <li>Test on mobile devices</li>
          </ul>
          <h3>Features</h3>
          <ul className="features-list">
            {tool.features.map((f, idx) => (
              <li key={idx}>{f}</li>
            ))}
          </ul>
          <style jsx>{`
            .tips-pane h3 {
              font-size: 1rem;
              font-weight: 600;
              margin: 1.5rem 0 0.75rem;
              color: #1e293b;
            }
            .tips-pane h3:first-child {
              margin-top: 0;
            }
            .tips-list,
            .features-list {
              list-style: none;
              padding: 0;
              font-size: 0.875rem;
            }
            .tips-list li,
            .features-list li {
              padding: 0.5rem 0;
              color: #475569;
              border-bottom: 1px solid #e2e8f0;
            }
            .tips-list li:before {
              content: '💡 ';
              margin-right: 0.5rem;
            }
          `}</style>
        </div>
      }
    />
  );
}
