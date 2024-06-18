import React, { useState, useEffect } from 'react';
import { getIssues } from '../services/api';
import { Gantt, Task, ViewMode } from 'gantt-task-react';
import 'gantt-task-react/dist/index.css';

const GanttChart = () => { // 确保导出的组件名称唯一
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getIssues().then(response => {
            const task = response.data.map(issue => ({
                id: issue.id.toString(),
                name: issue.title,
                start: new Date(issue.startDate),
                end: new Date(issue.endDate),
                type: 'tasks',
                progress: 100,
                project: issue.project.name,
                dependencies: []
            }));
            setTasks(tasks);
        });
    }, []);

    return (
        <div>
            <h2>Gantt Chart</h2>
            <Gantt tasks={tasks} viewMode={ViewMode.Week} />
        </div>
    );
};

export default GanttChart;
