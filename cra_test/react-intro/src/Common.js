import React, { useState } from 'react';



const otherCommon = () => {


    const [numbers, setNumbers] = useState([1, 2 , 3, 4 ]);

    const addHandler = () => {
        // create a new array as the actual one cannot be edited directly
        let storedNums = [...numbers];
        storedNums.push(numbers[numbers.length-1] + 1);
        // replace the state array with the edited version 
        setNumbers(storedNums);
    }

    const removeHandler = (index) => {
        let storedNums = [...numbers];
        storedNums.splice(index, 1);
        setNumbers(storedNums);
    }

    // const removeHandler = () => {
    //     let storedNums = [...numbers]
    //     storedNums.splice(numbers.length - 1)
    //     setNumbers(storedNums)
    // }




    return (
        <div >
            <h1>Hello, Common here</h1>
            {numbers.map((number, index) => {
                // here we pass the index to that function using anonymous function
                return <h1 onClick={() => removeHandler(index)} key={index}>{number}</h1>
            })}
            <button onClick={addHandler}>add number</button>
        </div>
    );
}

const Common = () => {
     const [inputText, setInputText] = useState("");
     const handler = (event) => {
         setInputText(event.target.value);
     }

     return (
         <div>
             <h1>user input</h1>
             <input onChange={handler} />
             <h2>{inputText}</h2>
         </div>
     )




}




export default Common;