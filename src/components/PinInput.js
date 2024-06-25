import React, { useEffect } from 'react';
import './PinInput.css';

const PinInput = ({ onPinEntered, errorMessage, pin, setPin, playTapSound }) => {
    useEffect(() => {
        if (errorMessage) {
            const timer = setTimeout(() => {
                setPin('');
            }, 2000); // Adjust delay as needed
            return () => clearTimeout(timer);
        }
    }, [errorMessage, setPin]);

    const handleDigitClick = (digit) => {
        playTapSound();
        if (pin.length < 3) { // Limiting to 3 digits
            const newPin = pin + digit;
            setPin(newPin);
            if (newPin.length === 3) {
                onPinEntered(newPin); // Call onPinEntered when third digit is added
            }
        }
    };

    const handleBackspaceClick = () => {
        playTapSound();
        setPin(pin.slice(0, -1));
    };

    return (
        <div className="pin-input-container">
            <div className="pin-input">
                <div className="pin-display">
                    {errorMessage ? (
                        <p className="error-message">{errorMessage}</p>
                    ) : (
                        Array.from(pin).map((_, index) => (
                            <span key={index}>●</span> // Display dots instead of numbers
                        ))
                    )}
                </div>
                <div className="pin-keypad">
                    <div className="keypad-row">
                        {[1, 2, 3].map(digit => (
                            <button key={digit} onClick={() => handleDigitClick(digit)}>
                                {digit}
                            </button>
                        ))}
                    </div>
                    <div className="keypad-row">
                        {[4, 5, 6].map(digit => (
                            <button key={digit} onClick={() => handleDigitClick(digit)}>
                                {digit}
                            </button>
                        ))}
                    </div>
                    <div className="keypad-row">
                        {[7, 8, 9].map(digit => (
                            <button key={digit} onClick={() => handleDigitClick(digit)}>
                                {digit}
                            </button>
                        ))}
                    </div>
                    <div className="keypad-row">
                        <button onClick={() => handleDigitClick(0)}>0</button>
                        <button onClick={handleBackspaceClick}><i className="fas fa-backspace"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PinInput;
