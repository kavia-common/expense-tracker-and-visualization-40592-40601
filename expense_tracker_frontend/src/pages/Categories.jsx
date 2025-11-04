import React from 'react';
import Card from '../components/common/Card';

/**
 * PUBLIC_INTERFACE
 * Categories shows a simple list of categories (placeholder).
 */
export default function Categories() {
  return (
    <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
      <Card title="Categories">
        <ul style={{ margin: 0, paddingLeft: 16 }}>
          <li className="text-muted">Food</li>
          <li className="text-muted">Transport</li>
          <li className="text-muted">Utilities</li>
          <li className="text-muted">Entertainment</li>
        </ul>
      </Card>
      <Card title="Tips">
        <div className="text-muted">You can add, rename, or merge categories later in the project.</div>
      </Card>
    </div>
  );
}
