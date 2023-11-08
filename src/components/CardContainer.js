import React, { useState } from 'react';
import Card from './Card';
import './CardContainer.css'; // Create this new CSS file for styling your container and button

const CardContainer = () => {
  const [timeZones, setTimeZones] = useState([
    { cityName: 'New York', timeZone: 'America/New_York' },
    { cityName: 'London', timeZone: 'Europe/London' },
    { cityName:'Houston' ,timeZone: 'America/Chicago'},
    { cityName:'Los Angles', timeZone:'America/Los_Angeles'},
    // Add more predefined timezones here
  ]);

  const addTimeZone = () => {
    // Placeholder for a new timezone, in a real app you might get this from user input
    const newTimeZone = { cityName: 'Tokyo', timeZone: 'Asia/Tokyo' };
    setTimeZones([...timeZones, newTimeZone]);
  };

  return (
    <div>
      <div className="cards-container">
        {timeZones.map((tz, index) => (
          <Card key={index} cityName={tz.cityName} timeZone={tz.timeZone} />
        ))}
      </div>
      <button onClick={addTimeZone} className="add-timezone-button">Add Timezone</button>
    </div>
  );
};

export default CardContainer;
