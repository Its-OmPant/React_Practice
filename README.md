# Day 03 Laying The Foundation

Here we will explore and understand the fundamental concepts of react.

1. Now First of all we will create npm scripts to avoid typing long commands to produce builds. to do so, we will add the following code in package.json

```json
    "scripts": {
		"dev": "parcel index.html",
		"build": "parcel build index.html",
		"test": "jest"
	},
```

2.  To Use react via importing, one thing we need to make sure is to make our script declared as type module, since browser scripts can't have import/exports. to do so add type="module" in scr tag inside your html file.

### React Element

React element is an Object returned by React.createElement which via rendering gets converted to equivalent HTML syntax.

We can write whole react code using react.createElement api's as we have seen in previous lecture, but doing so is very combursome. and the syntax becomes very complex to read even for very simple nested structures.

To solve this problem react recommends using JSX to write UI for our application

### JSX (JavaScript XML):

JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within their JavaScript files. While JSX is not a requirement for using React, it is widely adopted due to its ability to simplify the creation and description of user interface components.

The problem with JSX is it can't be executed by browsers/ js engine so it needs to be transpiled. parcel includes babel as a transpiler which helps transpile this jsx into core react code i.e. React.createElement()

```
	react.createElement -> react element (object) -> rendered(obj) -> HTML Element
```

```
	JSX -> react.createElement -> react element (object) -> rendered(obj) -> HTML Element
```

If JSX spans multiple line then it needs to br wrapper inside parentheses to be treated as valid syntax

## React Components

Components in react are parts in which one can describe the UI.

There are two types of component in react
1 - React Class Component (old, deprecated)
2 - React Functional Component (newer, mostly used)

### React functional component

Functional components are simply functions that returns some part of UI as JSX or simple react element.

Funtional Component can't be directly passed to render function for rendering, to render them you must enclose them in pair of angle brackets.
like ex.

```javascript
root.render(HeadingComponent); // ❌ invaild
root.render(<HeadingComponent />); // ✔️ Correct
```

This is the same way we can render components inside components or nested components. This is also known as <i><b>Component Composition</b></i>.

```javascript
const Title = () => {
	return <h1>Hello I am Title</h1>;
};

const Container = () => {
	return (
		<div>
			<Title />
			<span>This is a container</span>
		</div>
	);
};
```

We Can also have javascript inside JSX, via {} a pair of curly braces. Anything written inside them is treaded and executed as javascript. with this there's also a possibility that some malitous user injects something and excute bad code in our app, but this is also being taken care by JSX since JSX sanitizes the input there. (Learn more about it.)
