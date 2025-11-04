import React from 'react';
import Card from '../components/common/Card';

/**
 * PUBLIC_INTERFACE
 * ExpensesList shows a list/table of past expenses with basic placeholders.
 */
export default function ExpensesList() {
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <Card
        title="Expenses"
        action={<a className="btn" href="/expenses/new">New Expense</a>}
      >
        <div className="text-muted">This is where a table of expenses will appear.</div>
        <ul style={{ marginTop: 12 }}>
          <li className="text-muted">2025-03-02 • Lunch • $12.50 • Food</li>
          <li className="text-muted">2025-03-01 • Bus pass • $45.00 • Transport</li>
          <li className="text-muted">2025-02-28 • Electricity bill • $80.00 • Utilities</li>
        </ul>
      </Card>
    </div>
  );
}
