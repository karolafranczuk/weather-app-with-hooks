import React from 'react';
import ContentSearchPane from './ContentSearchPane';
import Title from './Title';
import ChoiceBox from './ChoiceBox';
import SearchBox from './SearchBox';

const MainSearchPane = () => {
    return (
        <div className="mainSearchPane">
            <ContentSearchPane>
                <Title />
                <ChoiceBox />
                <SearchBox />
            </ContentSearchPane>
        </div>
    )
}

export default MainSearchPane;