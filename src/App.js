import React, { useState, useEffect } from 'react';

const DaysUntil2029 = () => {
    const calculateTimeLeft = () => {
        const now = new Date();
        const targetDate = new Date(Date.UTC(2029, 0, 20, 14, 0, 0)); // 3 PM CEST = 2 PM UTC
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000); // Update every second

        return () => clearInterval(timer);
    }, []);

    return (
        <div class="container">
            <div class="text-block">
                <h1>How many days remaining of Trump's presidency?</h1>
                <p>
                    There are <strong>{timeLeft.days}</strong> days, <strong>{timeLeft.hours}</strong> hours, <strong>{timeLeft.minutes}</strong> minutes, and <strong>{timeLeft.seconds}</strong> seconds left with Trump as president &#129310;.
                </p>
            </div>
        </div>


    );
};

function App() {
    return (
        <div>
            <DaysUntil2029 />
        </div>
    );
}

export default App;