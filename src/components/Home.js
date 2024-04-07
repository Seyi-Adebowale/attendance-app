import React, { useEffect } from 'react';
import './home-style.css';
import { initClock } from '../clock';

const Home = () => {
    useEffect(() => {
        initClock();
        return () => {
            clearInterval(window.clockInterval);
        };
    }, []);

    return (
        <main>
            <div className="datetime">
                <div className="date">
                    <span id="dayname">Day</span>,{' '}
                    <span id="month">Month</span>{' '}
                    <span id="daynum"> 00</span>,{' '}
                    <span id="year">Year</span>
                </div>
                <div className="time">
                    <span id="hour">00</span>: <span id="minutes">00</span>:
                    <span id="seconds">00</span>
                    <span id="period">AM</span>
                </div>
            </div>

            <div className="buttons">
                <div className="checkin-btn aqua">Check In</div>
                <div className="checkout-btn aqua aqua2">Check Out</div>
            </div>
        </main>
    );
};

export default Home;
