// // 1 Creating Elements with React
const heading = React.createElement(
	"h1",
	{ style: { color: "red" } },
	"Hey There!!"
);

// console.log("Heading: ", heading); //returns an object

/**
 * Creating Nested Structures with react
 * Something like this
 * ---------------------
    <div id="parent">
        <div id="child">
            <h1>I am Nested Heading</h1>
        </div>
    </div>
 */

// // 2 Creating Nested Elements
const nested1 = React.createElement(
	"div",
	{ id: "parent" },
	React.createElement(
		"div",
		{ id: "child" },
		React.createElement("h1", {}, "I am Nested Heading")
	)
);

/**
 * Creating Nested Structures with react
 * Something like this
 * ---------------------
    <div id="parent">
        <div id="child1">
            <h1>I am Nested Heading in Child 1</h1>
            <h2>I am Nested Heading2 in Child 1</h2>
        </div>
        <div id="child12">
            <h1>I am Nested Heading in Child 2</h1>
            <h2>I am Nested Heading2 in Child 2</h2>
        </div>
    </div>
 */

// // 3 Multiple Siblings
const nested2 = React.createElement("div", { id: "parent" }, [
	React.createElement("div", { id: "child1" }, [
		React.createElement("h1", {}, "I am Nested Heading in Child 1"),
		React.createElement("h2", {}, "I am Nested Heading in Child 1"),
	]),
	React.createElement("div", { id: "child2" }, [
		React.createElement("h1", {}, "I am Nested Heading in Child 2"),
		React.createElement("h2", {}, "I am Nested Heading in Child 2"),
	]),
]);

// creating the root
const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering the elements inside root
root.render(nested2);

// root.render([heading, nested2]); // Rendering multiple objects as a list is also possible

/**
 * Note: the render() method will override the contents of the targeted root if there's already some content.
 * Try adding something in root, and before render method call add a blocking piece of code (i.e a large for loop)
 */
