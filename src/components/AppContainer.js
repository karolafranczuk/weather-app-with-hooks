import React, {useState} from 'react';
import Context from '../Context';
import Main from './Main';
import MainSearchPane from './MainSearchPane';
import Footer from './Footer';

import axios from 'axios';


const AppContainer = () => {

    const [city, setCity] = useState();
    const [error, setError] = useState();
    const [temp, setTemp] = useState();
    const [humidity, setHumidity] = useState();
    const [pressure, setPressure] = useState();

    const api_call = async e => {
        e.preventDefault();
        const location = e.target.elements.location.value;
        let choice = Array.from(document.getElementsByName("option")).find(r => r.checked).value;
        console.log(choice);
        console.log(document.querySelectorAll('.choice-box__option'));
        if (!location) return (setError("Please enter the name of city!"), setTemp(null), setHumidity(null), setPressure(null));
        const API_KEY = "ffea3697480f96020a2545829eeb2d44";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
        const request = axios.get(url);
        const response = await request;
        setTemp(response.data.main.temp);
        setHumidity(response.data.main.humidity);
        setPressure(response.data.main.pressure)
        setCity(response.data.name);
        setError(null);      
    }

    return (
        <>
        <Context.Provider value={{ api_call, temp, humidity, pressure, city, error}}>
            <MainSearchPane />
            <Main />
        </Context.Provider>
            <Footer />
        </>
    )
}

export default AppContainer;