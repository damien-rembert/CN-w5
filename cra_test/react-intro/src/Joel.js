import React, { useState } from 'react';



const Joel = () => {

    const [bool, setBool] = useState(false);

    const logger = () => {
        if (bool == true) {
            setBool(false);
        } else {
            setBool(true);
        }
        console.log(bool);
    }

    return (
        <div className = {bool}>
            <button className={bool.toString()} onClick={logger}>click me</button>
        </div>
    );


    const [persons, setPersons] = useState([
    { name: "Leon" , bool: true },
    { name: "Jordan", bool: false },
    ]);
    
    const handleClick = (value) => {
        if (value == true) {
            value = false;
        } else {
            value = true;
        }
    console.log(value);
    };

    return (
    <div>
    <Person name={persons[0].name} clickMe={handleClick} bool={persons[0].bool} />
    <Person name={persons[1].name} clickMe={handleClick} bool={persons[1].bool} />
    </div>
    );
    };

    const Person = (props) => {
        return <h1 onClick={() => props.clickMe()}>{props.name}</h1>;
    };



export default Joel;