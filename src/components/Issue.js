import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Chart, registerables } from 'chart.js';
import '../css/Issue.css'; // 确保路径和大小写正确

// 注册 Chart.js 所有的组件
Chart.register(...registerables);

const Issue = () => {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        const fetchIssues = async () => {
            try {
                const response = await fetch('/api/issues'); // 假设你有这个API端点
                const data = await response.json();
                setIssues(data);
            } catch (error) {
                console.error('Error fetching issues:', error);
            }
        };

        fetchIssues();
        drawGanttChart();
    }, []); // 空依赖数组表示只在组件挂载和卸载时运行

    const showDetails = (issueId) => {
        const issue = issues.find((issue) => issue.id === issueId);
        const detailsElement = document.getElementById('issue-details');
        if (issue) {
            detailsElement.innerText = `Title: ${issue.title}\nDescription: ${issue.description}`;
            detailsElement.style.display = 'block';
            detailsElement.classList.add('fade-in');
            setTimeout(() => {
                detailsElement.classList.remove('fade-in');
            }, 1000);
        }
    };

    const drawGanttChart = () => {
        const ctx = document.getElementById('ganttChart').getContext('2d');
        const data = {
            labels: ['Task 1', 'Task 2', 'Task 3'],
            datasets: [{
                label: 'Gantt Chart',
                data: [30, 20, 10],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }]
        };
        new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                indexAxis: 'y',
                scales: {
                    x: {
                        beginAtZero: true
                    }
                }
            }
        });
    };

    return (
        <div className="container">
            <h1>Issue</h1>
            <div className="issue-list">
                <h2>Issue List</h2>
                <ul>
                    {issues.map((issue) => (
                        <li key={issue.id}>
                            <Link to="#" onClick={() => showDetails(issue.id)}>{issue.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div id="issue-details" className="issue-details">
                <h2>Issue Details</h2>
                <p></p>
            </div>
            <div className="gantt-chart">
                <h2>Gantt Chart</h2>
                <canvas id="ganttChart"></canvas>
            </div>
        </div>
    );
};

export default Issue;
