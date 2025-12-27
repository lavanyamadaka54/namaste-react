import React from 'react';
import ReactDOM from 'react-dom/client';


//React.createElement ==> ReactElement-JS Object ==> HTMLElement(render)
const reactHeading = React.createElement("h1",{id:"heading"},"Hello React");

//JSX (transpiled before it reaches the JS) by Babel(PARCEL)
//JSX ==> Babel transpiles it to ==> React.createElement ==> ReactElement-JS Object ==> HTMLElement(render)

const jsxHeading = <h1 id="heading">React using JSX</h1>  // JSX is a HTML like syntax


// React Functional Component
// function that returns jsx piece of code is known ad functional component

const HeadingComponent = () => {
    return <h1>Namste React Functional Component</h1>
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading) //here react element will convert into html and then will render