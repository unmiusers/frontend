import React from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css'; // 确保路径正确

const UserProjects = () => {
    return (
        <div className="container">
            <header>
                <nav className="navbar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/issue">Issue</Link></li>
                        <li><Link to="/projects">Project</Link></li>
                        <li><Link to="/users">User</Link></li>
                        <li><Link to="/reports">Report</Link></li>
                        <li><Link to="/notifications">Notification</Link></li>
                        <li><Link to="/wiki">Wiki</Link></li>
                    </ul>
                </nav>
                <h1>User Projects</h1>
            </header>
            <main>
                <section className="user-projects">
                    <h2>My Projects</h2>
                    <div className="project-item">
                        <h3>Project 1</h3>
                        <button className="manage-permissions">Manage Permissions</button>
                        <div className="permissions">
                            <h4>Collaborators</h4>
                            <ul>
                                <li>John Doe - Admin</li>
                                <li>Jane Smith - Editor</li>
                            </ul>
                            <button className="add-collaborator">Add Collaborator</button>
                        </div>
                    </div>
                    <div className="project-item">
                        <h3>Project 2</h3>
                        <button className="manage-permissions">Manage Permissions</button>
                        <div className="permissions">
                            <h4>Collaborators</h4>
                            <ul>
                                <li>Alice Brown - Viewer</li>
                                <li>Bob Johnson - Editor</li>
                            </ul>
                            <button className="add-collaborator">Add Collaborator</button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default UserProjects;