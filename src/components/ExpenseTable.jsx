import React from 'react';

function ExpenseTable({ expenses }) {
  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount ($)</th>

        </tr>
      </thead>
      <tbody>
        {expenses.map(exp => (
          <tr key={exp.id}>
            <td>{exp.description}</td>
            <td>{exp.amount.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;

