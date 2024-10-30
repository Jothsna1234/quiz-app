import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'user' && password === 'pass') {
            navigate('/home');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="login-grid-container">
            {/* Left side: Blue background with the logo */}
            <div className="login-left-section">
                <div className="logo">
                </div>
            </div>

            {/* Right side: Boy image at the top and form below */}
            <div className="login-right-section">
                <div className="boy-image"></div>
                <div className="login-form-container">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin} className="login-form">
                        <input
                            type="text"
                            placeholder="User Name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="login-input"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="login-input"
                        />
                        <button type="submit" className="login-button">LOG IN</button>
                    </form>
                    <p><a href="/forgot-password" className="forgot-password">Forgot password?</a></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
