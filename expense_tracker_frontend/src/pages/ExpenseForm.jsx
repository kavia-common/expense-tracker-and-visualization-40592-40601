import React from 'react';
import Card from '../components/common/Card';

/**
 * PUBLIC_INTERFACE
 * ExpenseForm provides a simple form to add a new expense (scaffold only).
 */
export default function ExpenseForm() {
  const onSubmit = (e) => {
    e.preventDefault();
    // Placeholder: integrate with state/services later
    alert('Expense submitted (placeholder)');
  };

  return (
    <div style={{ display: 'grid', gap: 16, maxWidth: 560 }}>
      <Card title="Add Expense">
        <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12 }}>
          <label>
            <div className="mono-label">Date</div>
            <input className="input" type="date" required />
          </label>
          <label>
            <div className="mono-label">Description</div>
            <input className="input" placeholder="e.g., Coffee" required />
          </label>
          <label>
            <div className="mono-label">Amount</div>
            <input className="input" type="number" step="0.01" min="0" placeholder="0.00" required />
          </label>
          <label>
            <div className="mono-label">Category</div>
            <select className="input" defaultValue="Food">
              <option>Food</option>
              <option>Transport</option>
              <option>Utilities</option>
            </select>
          </label>
          <div style={{ display: 'flex', gap: 8 }}>
            <button type="submit" className="btn">Save</button>
            <a href="/expenses" className="btn btn-secondary" role="button">Cancel</a>
          </div>
        </form>
      </Card>
    </div>
  );
}
