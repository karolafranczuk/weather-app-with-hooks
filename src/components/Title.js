import React from 'react';
import weather from '../icons/weather.png';

const Title = () => (
    <div className="title">
      <h1>Weather App</h1>
      <img src={weather} alt={"Weather logo"}/>

    </div>
)

export default Title;