import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import './Questions.scss'

export const Questions = (props) => {
    if (!props?.id) return null
    return (
       
            <div>
                <h2>{props.question}</h2>
                <div>
                    <input
                        onClick={(e) => props.getAnswer(e)}
                        type="radio" id="q1" name="q1" value={props.value1} />
                    <label htmlFor="q1">{props.answ1}</label>
                </div>
                <div>
                    <input
                        onClick={(e) => props.getAnswer(e)}

                        type="radio" id="q2" name="q2" value={props.value2} />
                    <label htmlFor="q2">{props.answ2}</label>
                </div>
                <div>
                    <input
                        onClick={(e) => props.getAnswer(e)}

                        type="radio" id="q3" name="q3" value={props.value3} />
                    <label htmlFor="q3">{props.answ3}</label>
                </div>
                <div>
                    <input className='button-main'
                    onClick={() => {
                        props.handleNext()
                        // props.getReset()
                    }}
                    type="button" value={props.next} />
                </div>
            </div>
    
    )
}

export default Questions