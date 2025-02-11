import React from 'react';

export default function DashboardPage() {
  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <section>
        <h2>Recent Activity</h2>
        <ul>
          <li>Task 1 completed</li>
          <li>Task 2 in progress</li>
          <li>Task 3 pending</li>
        </ul>
      </section>
    </div>
  );
}