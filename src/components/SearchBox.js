import React from 'react';
import TagLine from './TagLine';
import WeatherSearch from './WeatherSearch';

const SearchBox = () => (
    <div className="searchBox">
        <TagLine />
        <WeatherSearch />
    </div>
)

export default SearchBox;