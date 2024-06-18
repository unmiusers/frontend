import React from 'react';
import { Link } from 'react-router-dom';
import '../css/index.css';

const Home = () => {
    return (
        <div>
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
                <div className="user-actions">
                    <Link to="/settings" className="button">Settings</Link>
                    <Link to="/signin" className="button">Sign In</Link>
                </div>
                <h1>Welcome to the Project Management System</h1>
            </header>
            <main>
                <section>
                    <h2>Overview</h2>
                    <p>Welcome to the Project Management System. Use the navigation above to access different modules.</p>
                </section>
            </main>
        </div>
    );
};

export default Home;
