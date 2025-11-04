import React from 'react';
import Card from '../components/common/Card';

/**
 * PUBLIC_INTERFACE
 * Dashboard shows high-level overview cards and quick stats.
 */
export default function Dashboard() {
  return (
    <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
      <Card
        title="Overview"
        action={<a className="btn btn-secondary" href="/expenses/new">Add Expense</a>}
      >
        <div className="mono-label">ENV</div>
        <div className="text-muted" style={{ marginTop: 6, fontSize: 14 }}>
          API: {process.env.REACT_APP_API_BASE || process.env.REACT_APP_BACKEND_URL || 'not set'}
        </div>
      </Card>

      <Card title="Spending">
        <div style={{ height: 120, display: 'grid', placeItems: 'center' }} className="text-muted">
          Chart placeholder
        </div>
      </Card>

      <Card title="Categories">
        <ul style={{ margin: 0, paddingLeft: 16 }}>
          <li className="text-muted">Food</li>
          <li className="text-muted">Transport</li>
          <li className="text-muted">Utilities</li>
        </ul>
      </Card>
    </div>
  );
}
