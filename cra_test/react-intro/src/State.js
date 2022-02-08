import React, { useState } from 'react';


const State = () => {
    const [count, setCount] = useState([]);

    return (
        <div>
            <Persons />
        </div>
    )
}

// const HandleClick

// stick with flicking between booleans
// “if bool is true return / render [this piece of code]” 


// const [bool, setBool] = useState(false);

//     const logger = () => {
//         if (bool == true) {
//             setBool(false)
//         } else {
//             setBool(true)
//         }
//         console.log(bool)
//     }

const Persons = () => {
    const [persons, setPersons] = useState([
        {name: "Dan", age: 33, bg_color: "blue"}, {name: "Jon", age: 44, bg_color: "red"}
    ]);
    const Person = (props) => {
        return <h1 onClick={() => props.clickMe("Hi there")}>{props.name}</h1>;
        };

    return (
        <div>
            <Person
            name={persons[0].name}
            age={persons[0].age} />
            <Person 
            name={persons[1].name}
            age={persons[1].age} />
        </div>
    )
}

const Person = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>

        </div>

    )
}


export default State;