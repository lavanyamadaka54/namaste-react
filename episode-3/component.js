import React from "react";
import ReactDOM from "react-dom/client";

// React Functional Component
// function that returns jsx piece of code is known ad functional component

const Title = () => {
  return (
    <>
      <h1 className="title">React Title Component</h1>
    </>
  );
};

const element = (
  <div>
    <Title />
    {/*you can keep component or element inside another jsx component or element*/}
    <h3>react element</h3>
  </div>
);

const HeadingComponent = () => {
  return (
    <div id="container">
      {Title()}
      {/*you can run any js code inside jsx by using this curly braces*/}
      <Title></Title>
      <Title />
      <h2 className="heading">Namste React Functional Component</h2>
      {element}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
