import React from 'react';
import './dashboard.css'; // Ensure this path is correct
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const Dashboard = () => {
  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="/">CartCraft</a>
        </div>
        <div className="navbar-menu">
          <a href="/profile"><i className="fas fa-user"></i> Profile</a>
          <a href="/orders"><i className="fas fa-box"></i> Orders</a>
          <a href="/products"><i className="fas fa-list"></i> Products</a>
          <a href="/settings"><i className="fas fa-cog"></i> Settings</a>
          <a href="/logout"><i className="fas fa-sign-out-alt"></i> Logout</a>
        </div>
      </nav>
      <div className="dashboard-container">
        <aside className="sidebar">
          <ul>
            <li><a href="/dashboard"><i className="fas fa-tachometer-alt"></i> Dashboard</a></li>
            <li><a href="/profile"><i className="fas fa-user"></i> Profile</a></li>
            <li><a href="/orders"><i className="fas fa-box"></i> Orders</a></li>
            <li><a href="/products"><i className="fas fa-list"></i> Products</a></li>
            <li><a href="/settings"><i className="fas fa-cog"></i> Settings</a></li>
            <li><a href="/logout"><i className="fas fa-sign-out-alt"></i> Logout</a></li>
          </ul>
        </aside>
        <main className="main-content">
          <h1>Welcome to the Dashboard</h1>
          <p>Here you can manage your profile, view orders, and explore products.</p>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
