import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Card component with gradient header accent and subtle shadow.
 */
export default function Card({ title, action, children, style, bodyStyle }) {
  return (
    <section className="card" style={style}>
      {(title || action) && (
        <div className="card-header">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <h3 className="card-title">{title}</h3>
            {action ? <div>{action}</div> : null}
          </div>
        </div>
      )}
      <div className="card-body" style={bodyStyle}>
        {children}
      </div>
    </section>
  );
}
