import React from 'react';

const ChoiceBox = () => (
    <div className="choice-box">
        <p className="choice-box__paragraph">Select a option:</p>
        <div className="choice-box__div">
        <label className="choice-box__label">
            <input type="radio" className="choice-box__option" name="weather-option" value="current weather" checked/>
            &nbsp;current
        </label>
        <br></br>
        <label className="choice-box__label">
            <input type="radio" className="choice-box__option" name="weather-option" value="current weather"/>
            &nbsp;4 hours
        </label>
        <br></br>
        <label className="choice-box__label">
            <input type="radio" className="choice-box__option" name="weather-option" value="current weather"/>
            &nbsp;16 days
        </label>
        </div>
    </div>

)

export default ChoiceBox;