import React, {useState} from 'react';
import axios from 'axios';

import Header from "./Header";
import Content from "./Content";
import DateTime from "./DateTime";
import TagLine from "./TagLine";
import WeatherSearch from "./WeatherSearch";
import Error from './Error';
import Footer from './Footer';

import Context from '../Context';
import WeatherData from './WeatherData';

const Main = () => {

    const [weather, setWeather] = useState();
    const [city, setCity] = useState();
    const [error, setError] = useState();

    const api_call = async e => {
        e.preventDefault();
        const location = e.target.elements.location.value;
        if (!location) return (setError("Please enter the name of city!"), setWeather(null));
        const API_KEY = "ffea3697480f96020a2545829eeb2d44";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
        const request = axios.get(url);
        const response = await request;
        setWeather(response.data.main);
        setCity(response.data.name);
        setError(null);  
        console.log(weather);     
    }

    return (
        <div className="main">
            <Content>
                <DateTime />
                <Context.Provider value={{ api_call, weather, city, error}}>
                    {weather && <WeatherData />}
                    {error && <Error/>}
                </Context.Provider>
            </Content>
        </div>
    )
}

export default Main;