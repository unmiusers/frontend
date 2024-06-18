import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const getIssues = () => axios.get(`${API_URL}/issues`);
export const createUser = (user) => axios.post(`${API_URL}/users`, user);
export const getUsers = () => axios.get(`${API_URL}/users`);
export const createProject = (project) => axios.post(`${API_URL}/projects`, project);
export const getProjects = () => axios.get(`${API_URL}/projects`);
export const createIssue = (issue) => axios.post(`${API_URL}/issues`, issue);
