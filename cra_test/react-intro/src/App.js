import React from 'react';
import "./App.css";
import godzilla from "./img/godzilla.jpg";
import ad_astra from "./img/ad_astra.jpg";
import another_round from "./img/another_round.jpg";
import copperfield from "./img/copperfield.jpg";
import queen_of_the from "./img/queen_of_the.jpg";
// import willow from "./img/willow.jpg"


// recreate the following sections in react, must use more that one component and pass data through props.
// good opportunity for you to mess about with some CSS as well, treat it as a stretch goal, doesn’t have to be exact 👍 
// display images but they don’t need to be exactly the same, search on how to import images 👀 (must be in src folder)


// import React from 'react';
// import logo from './logo.png'; // Tell webpack this JS file uses this image

// console.log(logo); // /logo.84287d09.png

// function Header() {
//   // Import result is the URL of your image
//   return <img src={logo} alt="Logo" />;
// }


{/* <img id="face" src="./img/Elon_Musk_1.webp" alt="A slappable face of your choice"> */}

// let filmsImg = [];
{/* <img src={godzilla} alt="Logo" /> */}



const App = () => {
  return (
    <div className='main'>
      <h1>My site</h1>
      <DivBuildo className="nf" />
      <DivBuildo className="RBnB" />
      
    </div>
  )
};

// need to add title at the bottom over the images
const DivBuildo = (props) => {
  return (
    <div className={props.className}>
      <ImageBuildo filmName={godzilla} className={props.className}/>
      <ImageBuildo filmName={ad_astra} className={props.className}/>
      <ImageBuildo filmName={copperfield} className={props.className}/>
      <ImageBuildo filmName={queen_of_the} className={props.className}/>
      <ImageBuildo filmName={another_round} className={props.className}/>
    </div>
  )
}


const ImageBuildo = (props) => {
  return (
  <div className="sub">
    <img src={props.filmName} className={props.className} />
    <p className={props.className}>{props.filmName}</p>
  </div>
  )

  // return <img src={props.filmName} alt="{props.filmName}" className={props.className} />

} 

export default App;








// const App = () => {
//   return (
//     <div className='main'>
//       <h1>My site</h1>
//       <OneTwo num="25" anotherNum="21" />
//       <OneTwo num="45" anotherNum="21" />
//       <OneTwo num="15" anotherNum="21" />
//       <OneTwo num="12" anotherNum="21" />
//     </div>
//   )
// };



// // props is an object
// const OneTwo = (props) => {
//   return (
//     <div>
//         <p>here is a number {props.num}</p>
//         <Double secondNum={props.anotherNum} />
//     </div>
//   )
// };

// const Double = (props) => {
//   let result = props.secondNum * 2;
//   return <p>The other number is equal to {result}</p>
// }

// export default App;

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
