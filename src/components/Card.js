import React from 'react';
import './Card.css';

const Card = ({ cityName, timeZone }) => {
  const [currentTime, setCurrentTime] = React.useState('');

  // Update the time every second
  React.useEffect(() => {
    const timerId = setInterval(() => {
      const time = new Date().toLocaleTimeString('en-US', { timeZone: timeZone });
      setCurrentTime(time);
    }, 1000);

    return () => {
      clearInterval(timerId); // Clear the interval on unmount
    };
  }, [timeZone]);

  return (
    <div className="card">
      <div className="card-content">
        <h2>{cityName}</h2>
        <p>{currentTime}</p>
      </div>
    </div>
  );
};

export default Card;
