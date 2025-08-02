import React from "react";
import ReactDOM from "react-dom/client";

// react element
const heading = React.createElement("h1", { id: "heading" }, "Hello World! ");
// console.log(heading);
// console.log(typeof heading);

// JSX
const heading2 = <h1 id="heading2">I am a JSX Heading</h1>;

console.log(heading2);
console.log(typeof heading2);

const HeadingComponent = () => {
	return <h1>This is a Heading Component</h1>;
};

// react rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
