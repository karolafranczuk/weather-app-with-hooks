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



    return (
        <div className="main">
            <Content>
                <DateTime />
                <Context.Provider>
                    <WeatherData />
                    <Error/>
                </Context.Provider>
            </Content>
        </div>
    )
}

export default Main;