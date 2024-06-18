import React from 'react';
import { Link } from 'react-router-dom';
import '../css/project.css';

const ProjectList = () => {
    React.useEffect(() => {
        const toggleButtons = document.querySelectorAll('.toggle-details');
        toggleButtons.forEach(button => {
            button.addEventListener('click', () => {
                const details = button.nextElementSibling;
                details.style.display = details.style.display === 'block' ? 'none' : 'block';
            });
        });
    }, []);

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
                <h1>Project List</h1>
            </header>
            <main>
                <section className="project-list">
                    <h2>Projects</h2>
                    <div className="project-item">
                        <h3>Project 1</h3>
                        <button className="toggle-details">Details</button>
                        <div className="project-details">
                            <p>Project 1 details...</p>
                        </div>
                    </div>
                    <div className="project-item">
                        <h3>Project 2</h3>
                        <button className="toggle-details">Details</button>
                        <div className="project-details">
                            <p>Project 2 details...</p>
                        </div>
                    </div>
                    {/* 添加更多项目 */}
                </section>
            </main>
        </div>
    );
};

export default ProjectList;

