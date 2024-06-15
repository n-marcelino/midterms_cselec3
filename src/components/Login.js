import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Content.module.css';

function Login({ setLoggedIn }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const validUsers = [
        { username: 'nico', password: 'marcelino' },
        { username: 'jimin', password: 'bangtan' },
        { username: 'john', password: 'doe' }
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValidUser = validUsers.some(
            (user) => user.username === username && user.password === password
        );
        if (isValidUser) {
            setLoggedIn(true);
            navigate('/home');
        } else {
            alert('Incorrect username or password');
        }
    };

    return (
        <div className={styles.container}>
            <h2>Log In</h2>
            <form className="col-md-5" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Login;
