import React, { useState } from 'react';
import './AuthPage.css';  // Import the CSS for AuthPage

function AuthPage() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        if (isSignUp) {
            console.log('Sign Up Data:', formData);
            // Add sign-up logic (e.g., API call)
        } else {
            console.log('Login Data:', formData);
            // Add login logic (e.g., API call)
        }
    };

    return (
        <div className="page-container">
            <div className="left-side">
                <div className="text-border electrofixnics">
                    <h1>Electro</h1>
                    <h1>Fix</h1>
                    <h1>Nics</h1>
                </div>
            </div>
            <div className="right-side">
                <div className="auth-container">
                    <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {isSignUp && (
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
                    </form>
                    <button onClick={() => setIsSignUp(!isSignUp)}>
                        {isSignUp ? 'Switch to Login' : 'Switch to Sign Up'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;
