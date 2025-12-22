const heading = React.createElement("h1",{id:"heading"},"Hello React");


const mainContainer = React.createElement("div", {}, [
    React.createElement("div", {}, [
        React.createElement("h1", {}, "I am the heading 1"),
        React.createElement("h2", {}, "I am the heading 2")
    ]),
    React.createElement("div", {}, [
        React.createElement("h1", {}, "I am the heading 1"),
        React.createElement("h2", {}, "I am the heading 2")
    ])
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(mainContainer)