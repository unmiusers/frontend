// src/components/Users.js
import React, { useState, useEffect } from 'react';
import { getUsers, createUser } from '../services/api';
import './css/styles.css';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        getUsers().then(response => setUsers(response.data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser({ name, email }).then(response => setUsers([...users, response.data]));
    };

    return (
        <div>
            <h2>Users</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <button type="submit">Add User</button>
            </form>
            <ul>
                {users.map(user => <li key={user.id}>{user.name} ({user.email})</li>)}
            </ul>
        </div>
    );
};

export default Users;

// 类似地创建Projects.js和Issues.js
