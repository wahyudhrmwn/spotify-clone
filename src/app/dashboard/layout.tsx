import React from 'react';

export default function DashboardLayout({
  children, // Halaman yang akan dibungkus oleh layout ini
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout bg-blue-400 flex">
      <aside className="sidebar bg-yellow-200">
        {/* Sidebar dengan navigasi dashboard */}
        <nav>
          <ul>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/dashboard/settings">Settings</a></li>
          </ul>
        </nav>
      </aside>
      <main className="dashboard-content">
        {children} {/* Halaman dashboard atau settings akan dirender di sini */}
      </main>
    </div>
  );
}