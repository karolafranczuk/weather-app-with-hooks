import React from 'react';
import Context from '../Context';
import Main from './Main';
import MainSearchPane from './MainSearchPane';

const AppContainer = () => {
    return (
        <>
            <MainSearchPane />
            <Main />
        </>
    )
}

export default AppContainer;