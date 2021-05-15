import React, {useState} from 'react';

const ChoiceBox = () => {
    const [option, setOption] = useState('current');

    return (
    <div className="choice-box">
        <p className="choice-box__paragraph">Select a option:</p>
        <div className="choice-box__div">
        <label className="choice-box__label">
            <input type="radio" 
            className="choice-box__option" 
            name="option" 
            value="current"
            checked={option==="current"}
            onChange={(e)=>setOption(e.target.value)}/>
            &nbsp;current
        </label>
        <br></br>
        <label className="choice-box__label">
            <input type="radio" 
            className="choice-box__option" 
            name="option" 
            value="4hours"
            checked={option=="4hours"}
            onChange={(e)=>setOption(e.target.value)}/>
            &nbsp;4 hours
        </label>
        <br></br>
        <label className="choice-box__label">
            <input type="radio" 
            className="choice-box__option" 
            name="option" 
            value="16days"
            checked={option=="16days"}
            onChange={(e)=>setOption(e.target.value)}
            />
            &nbsp;16 days
        </label>
        </div>
    </div>
    )

}

export default ChoiceBox;