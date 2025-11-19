'use client';

import { getToolMetadata } from '@/lib/tools';
import DashboardLayout from '@/components/layouts/DashboardLayout';

export default function ChannelAnalyticsDashboardPage() {
  const tool = getToolMetadata('channel-analytics-dashboard');

  if (!tool) {
    return <div>Tool not found</div>;
  }

  return (
    <DashboardLayout>
      <div className="dashboard-header">
        <h1>{tool.name}</h1>
        <div className="controls">
          <input type="text" placeholder="Enter Channel ID" />
          <select>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Last year</option>
          </select>
          <button>Load Analytics</button>
        </div>
      </div>

      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Total Views</h3>
          <p className="metric-value">0</p>
          <span className="metric-change">+0%</span>
        </div>
        <div className="metric-card">
          <h3>Subscribers</h3>
          <p className="metric-value">0</p>
          <span className="metric-change">+0%</span>
        </div>
        <div className="metric-card">
          <h3>Watch Time (hrs)</h3>
          <p className="metric-value">0</p>
          <span className="metric-change">+0%</span>
        </div>
        <div className="metric-card">
          <h3>Engagement Rate</h3>
          <p className="metric-value">0%</p>
          <span className="metric-change">+0%</span>
        </div>
      </div>

      <div className="charts-section">
        <div className="chart-card">
          <h3>Views Over Time</h3>
          <div className="chart-placeholder">Chart will render here</div>
        </div>
        <div className="chart-card">
          <h3>Audience Demographics</h3>
          <div className="chart-placeholder">Chart will render here</div>
        </div>
      </div>

      <div className="table-section">
        <h3>Top Performing Videos</h3>
        <table>
          <thead>
            <tr>
              <th>Video Title</th>
              <th>Views</th>
              <th>Watch Time</th>
              <th>Engagement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4} className="empty-state">
                No data available. Enter a channel ID to load analytics.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .dashboard-header {
          margin-bottom: 2rem;
        }
        .dashboard-header h1 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #1e293b;
        }
        .controls {
          display: flex;
          gap: 1rem;
        }
        .controls input,
        .controls select {
          padding: 0.5rem 1rem;
          border: 1px solid #cbd5e1;
          border-radius: 0.375rem;
          font-size: 0.875rem;
        }
        .controls button {
          padding: 0.5rem 1.5rem;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 0.375rem;
          font-weight: 500;
          cursor: pointer;
        }
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .metric-card {
          background: white;
          padding: 1.5rem;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        .metric-card h3 {
          font-size: 0.875rem;
          font-weight: 500;
          color: #64748b;
          margin-bottom: 0.5rem;
        }
        .metric-value {
          font-size: 2rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }
        .metric-change {
          font-size: 0.875rem;
          color: #10b981;
        }
        .charts-section {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .chart-card {
          background: white;
          padding: 1.5rem;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        .chart-card h3 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1e293b;
        }
        .chart-placeholder {
          height: 200px;
          background: #f8fafc;
          border-radius: 0.375rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
        }
        .table-section {
          background: white;
          padding: 1.5rem;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        .table-section h3 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1e293b;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th {
          text-align: left;
          padding: 0.75rem;
          background: #f8fafc;
          font-size: 0.875rem;
          font-weight: 600;
          color: #475569;
        }
        td {
          padding: 0.75rem;
          border-top: 1px solid #e2e8f0;
        }
        .empty-state {
          text-align: center;
          color: #94a3b8;
        }
      `}</style>
    </DashboardLayout>
  );
}
