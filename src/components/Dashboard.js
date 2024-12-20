import React from 'react';
import './Dashboard.css'; // Import the new CSS file

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <div className="dashboard-content">
                <div className="card">
                    <h2>Welcome to your Dashboard</h2>
                    <p>Here you can manage your documents, tasks, and communicate with your team.</p>
                </div>
                <div className="card">
                    <h2>Recent Activities</h2>
                    <p>View your recent activities and updates here.</p>
                </div>
                <div className="card">
                    <h2>Team Collaboration</h2>
                    <p>Collaborate with your team in real-time.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;