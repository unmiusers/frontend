import React from 'react';
import { Link } from 'react-router-dom';
import { Chart } from 'chart.js';
import '../css/user.css'; // 确保路径正确

const UserManagement = () => {
    React.useEffect(() => {
        drawUserIssuesChart();
    }, []);

    const drawUserIssuesChart = () => {
        const ctx = document.getElementById('userIssuesChart').getContext('2d');
        const data = {
            labels: ['Issue 1', 'Issue 2', 'Issue 3'],
            datasets: [{
                label: 'Number of Issues',
                data: [12, 19, 3],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }]
        };
        new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    };

    return (
        <div className="container">
            <nav className="navbar">
                <ul>
                    <li><Link to="/issue">Issue</Link></li>
                    <li><Link to="/projects">Project</Link></li>
                    <li><Link to="/users">User</Link></li>
                    <li><Link to="/reports">Report</Link></li>
                    <li><Link to="/notifications">Notification</Link></li>
                </ul>
            </nav>
            <h1>User Management</h1>
            <div className="user-management">
                <form id="user-form">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="role">Role:</label>
                    <select id="role" name="role">
                        <option value="admin">Admin</option>
                        <option value="editor">Editor</option>
                        <option value="viewer">Viewer</option>
                    </select>

                    <button type="submit">Save Changes</button>
                </form>
            </div>
            <div className="chart-container">
                <h2>User Issues Chart</h2>
                <canvas id="userIssuesChart"></canvas>
            </div>
        </div>
    );
};

export default UserManagement;
