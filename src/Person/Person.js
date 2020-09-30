import React from 'react';
import './Person.css'
const person = (props) => {
return (
        <div className="Person">
            <p onClick={props.click}>my name is {props.name} and age is {props.age} and {props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    );
}


export default person;