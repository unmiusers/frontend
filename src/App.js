import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Issue from './components/Issue';
import CreateIssue from './components/CreateIssue';
import CreateProject from './components/CreateProject';
import ProjectList from './components/ProjectList';
import UserManagement from './components/UserManagement';
import UserProjects from './components/UserProjects';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/issue" element={<Issue />} />
                <Route path="/create-issue" element={<CreateIssue />} />
                <Route path="/create-project" element={<CreateProject />} />
                <Route path="/projects" element={<ProjectList />} />
                <Route path="/users" element={<UserManagement />} />
                <Route path="/user-projects" element={<UserProjects />} />
            </Routes>
        </Router>
    );
};

export default App;