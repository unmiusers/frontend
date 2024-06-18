import React from 'react';
import { Link } from 'react-router-dom';
import '../css/issue_create.css';

const CreateIssue = () => {
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
            <h1>Create Issue</h1>
            <form className="issue-form">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" required />

                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" required></textarea>

                <label htmlFor="file-upload">Upload File:</label>
                <input type="file" id="file-upload" name="file-upload" />

                <button type="submit">Create Issue</button>
            </form>
        </div>
    );
};

export default CreateIssue;
