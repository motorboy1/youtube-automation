'use client';

import { getToolMetadata } from '@/lib/tools';
import DashboardLayout from '@/components/layouts/DashboardLayout';

export default function SmartSchedulerPage() {
  const tool = getToolMetadata('smart-scheduler');

  if (!tool) {
    return <div>Tool not found</div>;
  }

  return (
    <DashboardLayout>
      <div className="scheduler-header">
        <h1>{tool.name}</h1>
        <div className="header-controls">
          <select>
            <option>Max Views</option>
            <option>Max Engagement</option>
            <option>Consistent</option>
          </select>
          <select>
            <option>UTC</option>
            <option>EST</option>
            <option>PST</option>
          </select>
          <button>Optimize Schedule</button>
        </div>
      </div>

      <div className="calendar-section">
        <h2>Content Calendar</h2>
        <div className="calendar-grid">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <div key={day} className="calendar-day">
              <div className="day-header">{day}</div>
              <div className="day-slots">
                <div className="empty-slot">No videos scheduled</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="schedule-section">
        <h2>Upcoming Uploads</h2>
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Video</th>
              <th>Scheduled Time</th>
              <th>Expected Views</th>
              <th>Confidence</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5} className="empty-row">
                No videos scheduled. Add videos to see AI recommendations.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="insights-section">
        <div className="insight-card">
          <h3>Best Upload Times</h3>
          <ul className="time-list">
            <li>
              <span className="time">9:00 AM</span>
              <span className="confidence">High confidence</span>
            </li>
            <li>
              <span className="time">2:00 PM</span>
              <span className="confidence">Medium confidence</span>
            </li>
            <li>
              <span className="time">7:00 PM</span>
              <span className="confidence">High confidence</span>
            </li>
          </ul>
        </div>
        <div className="insight-card">
          <h3>Audience Activity</h3>
          <div className="activity-chart">
            <p>Activity heatmap will render here</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scheduler-header {
          margin-bottom: 2rem;
        }
        .scheduler-header h1 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #1e293b;
        }
        .header-controls {
          display: flex;
          gap: 1rem;
        }
        .header-controls select,
        .header-controls button {
          padding: 0.5rem 1rem;
          border: 1px solid #cbd5e1;
          border-radius: 0.375rem;
          font-size: 0.875rem;
        }
        .header-controls button {
          background: #3b82f6;
          color: white;
          border: none;
          font-weight: 500;
          cursor: pointer;
        }
        .calendar-section,
        .schedule-section,
        .insights-section {
          margin-bottom: 2rem;
        }
        h2 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1e293b;
        }
        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 1rem;
          background: white;
          padding: 1.5rem;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        .calendar-day {
          min-height: 150px;
          border: 1px solid #e2e8f0;
          border-radius: 0.375rem;
        }
        .day-header {
          padding: 0.75rem;
          background: #f8fafc;
          font-weight: 600;
          text-align: center;
          font-size: 0.875rem;
          border-bottom: 1px solid #e2e8f0;
        }
        .day-slots {
          padding: 0.5rem;
        }
        .empty-slot {
          font-size: 0.75rem;
          color: #94a3b8;
          text-align: center;
          padding: 1rem;
        }
        .schedule-table {
          width: 100%;
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          border-collapse: collapse;
          overflow: hidden;
        }
        .schedule-table th {
          padding: 1rem;
          background: #f8fafc;
          text-align: left;
          font-size: 0.875rem;
          font-weight: 600;
          color: #475569;
        }
        .schedule-table td {
          padding: 1rem;
          border-top: 1px solid #e2e8f0;
        }
        .empty-row {
          text-align: center;
          color: #94a3b8;
          padding: 2rem !important;
        }
        .insights-section {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        .insight-card {
          background: white;
          padding: 1.5rem;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        .insight-card h3 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1e293b;
        }
        .time-list {
          list-style: none;
          padding: 0;
        }
        .time-list li {
          display: flex;
          justify-content: space-between;
          padding: 0.75rem 0;
          border-bottom: 1px solid #e2e8f0;
        }
        .time {
          font-weight: 500;
          color: #1e293b;
        }
        .confidence {
          font-size: 0.875rem;
          color: #10b981;
        }
        .activity-chart {
          height: 200px;
          background: #f8fafc;
          border-radius: 0.375rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
        }
      `}</style>
    </DashboardLayout>
  );
}
