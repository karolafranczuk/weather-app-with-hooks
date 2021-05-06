import React, {useState} from 'react';
import axios from 'axios';

import Header from "./Header";
import Content from "./Content";
import DateTime from "./DateTime";
import TagLine from "./TagLine";

import Context from '../Context';

const Main = () => {

    const [weather, setWeather] = useState();
    const [city, setCity] = useState();
    const [error, setError] = useState();

    const api_call = async e => {
        e.preventDefault();
        const location = e.target.elements.location.value;

    }

    return (
        <div className="main">
            <Header />
            <Content>
                <DateTime />
                <TagLine />

            </Content>
        </div>
    )
}

export default Main;