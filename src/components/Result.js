import React from 'react';
import { NavLink } from 'react-router-dom'


export const Result = (props) => {
    return (
        <div className="result">
            <h2>Right answer</h2>
            <div className="result-count">{props.result}</div>
            <NavLink to="/"><input onClick={props.getResult} type="button" value="RESTART" /></NavLink>
        </div>
    )
}

export default Result