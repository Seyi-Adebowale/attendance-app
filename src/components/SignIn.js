import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const SignIn = ({ onSignIn }) => {
    const [pin, setPin] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate authentication - check if the entered PIN is correct
        if (pin === '1234') {
            onSignIn(); // Call the onSignIn function passed from parent component
            navigate('/home'); // Redirect to home page
        } else {
            alert('Invalid PIN. Please try again.'); // Show error message for incorrect PIN
        }
    };

    return (
        <div>
            <div className="hero">
                <div className="heading">
                    <img src="img/Copy_of_techno-removebg-preview.png" alt="logo" />
                    <h2>HIBYE ATTENDANCE TRACKER</h2>
                </div>

                <div className="form section-animated" id="message-form">
                    <div className="contactus-form">
                        <form method="post" action="#" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="password"
                                    value={pin}
                                    onChange={(e) => setPin(e.target.value)}
                                    placeholder="Enter PIN"
                                    required
                                    minLength={4}
                                    maxLength={4}
                                />
                                <label htmlFor="name">PIN</label>
                            </div>

                            <button type="submit" className="btnn">Sign In</button>
                        </form>
                    </div>
                </div>
                <h4>Technovada Solutions. © 2024</h4>
            </div>
        </div>
    );
};

export default SignIn;
