import React from 'react';

import Content from "./Content";
import DateTime from "./DateTime";
import Error from './Error';
import WeatherData from './WeatherData';

const Main = () => {

    return (
        <div className="main">
            <Content>
                <DateTime />
                <WeatherData />
                <Error/>
            </Content>
        </div>
    )
}

export default Main;