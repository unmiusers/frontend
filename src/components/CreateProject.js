import React from 'react';
import { Link } from 'react-router-dom';
import '../css/project.css';

const CreateProject = () => {
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
                <h1>Create Project</h1>
            </header>
            <main>
                <section className="create-project">
                    <form>
                        <label htmlFor="project-name">Project Name:</label>
                        <input type="text" id="project-name" name="project-name" required />

                        <label htmlFor="project-description">Project Description:</label>
                        <textarea id="project-description" name="project-description" required></textarea>

                        <label htmlFor="project-files">Upload Files:</label>
                        <input type="file" id="project-files" name="project-files[]" multiple />

                        <button type="submit">Create Project</button>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default CreateProject;
