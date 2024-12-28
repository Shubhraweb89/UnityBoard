import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setError('No user data available. Please log in.');
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get('http://localhost:5000/api/users/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUserData(response.data);
            } catch (err) {
                setError('Failed to fetch user data. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="text-danger">{error}</div>;
    }

    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <div className="dashboard-content">
                <div className="card">
                    <h2>Welcome, {userData.name}!</h2>
                    <p>Email: {userData.email}</p>
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