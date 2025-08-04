# Day 08 Let's Get Classy

In this lecture we will see an intrduction to class based components.

## Class Based Component

A class based component is a JS Class that extends React.Component and has a render method that returns some JSX.

```javascript
import React, { Component } from "react";

class User extends Component {
	render() {
		return <div>User</div>;
	}
}

export default User;
```

## Using props in class components.

-   To Use props we will have to create a constructor function inside the class that accepts the props and also calls the super(props) to properly initialize this.props in the component.

-   To use the value of props inside component we will us this.props.propName

```javascript
class User extends React.Component {
	component(props) {
		super(props);
	}
	render() {
		return <div>{this.props.username}</div>;
	}
}
```

## States In Class Components

Earlier we saw in functional components that we can create states very easily using useState Hook,
but this hooks and functional components are new features added to react, before then there was another way of creating states in class based components.

-   In class component when a component is mounted then it is actually instantiated from its class, so and all of its state are actually stored in a reserved object known as state, whatever will be there in the state object will be treated as a local state variable

```javascript
class User extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};

		console.log(this.state);
	}

	render() {
		const { name, designation, message } = this.props;
		const { count } = this.state;
		return (
			<div className="user-card">
				<h3 className="user-name">Name: {name}</h3>
				<h5 className="user-designation">Designation: {designation}</h5>
				<p className="user-message">{message}</p>
				<p>State Count: {count}</p>
			</div>
		);
	}
}
```

-   To <b>Update a state variable</b> react gives access to a special function setState, which is accessible via this. this setState function takes a object consisting of state and its changed value.

-   [NOTE]: This setState varibale doesn't replace the this.state object with the passed object, but only updates the values passed in the new object. meaning if there will be multiple state variables in this.state then this.setState(obj) won't touch all state values but only the once which are there in the obj.

-   In Class base components we also have another method called <b>componentDidMount</b> which is called after the component finishes rendering.

## Lifecycle of Class based Components

### 1 Mounting:

-   Mounting of a Class based component is divide into two phases,
    1 - Render Phase (constructor and render will be called)
    2 - Commit Phase (Actual DOM manipulation occures, componentDidMount call)

-   let's say a Class component is encountered, then
    1 - It will be instantiated, and its constructor function will be called
    2 - After constructor, the render() method will be called
    3 - After Render is done, react will update the actual DOM
    4 - Once DOM updates is done, then componentDidMount() fn will be called

-   To Understand lifecycle let's see this example

About.jsx

```javascript
class About extends React.Component {
	constructor() {
		super();
		console.log("Parent Constructor Called");
	}

	componentDidMount() {
		console.log("Parent DidMount Called");
	}

	render() {
		console.log("Parent Render Called");
		return (
			<div className="about-page">
				<h3 className="about-heading">Meet Our Team</h3>
				<User
					id="1"
					name="Mr Anonymous"
					designation="Software Engineer 2"
					message="I love building things"
				/>
				<User
					id="2"
					name="Mr Anonymous 2"
					designation="Devops"
					message="Liunx is my Love"
				/>
			</div>
		);
	}
}
```

User.jsx

```javascript
class User extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
		console.log(`User ${this.props.id} Constructor Called`);
	}

	componentDidMount() {
		console.log(`User ${this.props.id} DidMount Called`);
	}

	render() {
		const { name, designation, message, id } = this.props;
		const { count } = this.state;
		console.log(`User ${this.props.id} Render Called`);
		return (
			<div className="user-card">
				<h3 className="user-name">Name: {name}</h3>
				<h5 className="user-designation">Designation: {designation}</h5>
				<p className="user-message">{message}</p>
				<p>State Count: {count}</p>
				<button
					onClick={() => {
						this.setState({
							count: this.state.count + 1,
						});
					}}
				>
					Increment
				</button>
			</div>
		);
	}
}
```

[OUTPUT]: Now You'll probably guess the output to be like this ->

```
Parent Constructor Called
Parent Render Called
User 1 Constructor Called
User 1 Render Called
User 1 DidMount Called
User 2 Constructor Called
User 2 Render Called
User 2 DidMount Called
Parent DidMount Called
```

But the Actual OUTPUT Will be:

```
Parent Constructor Called
Parent Render Called
User 1 Constructor Called
User 1 Render Called
User 2 Constructor Called
User 2 Render Called
User 1 DidMount Called
User 2 DidMount Called
Parent DidMount Called
```

[Note]: This is because, React will perform some optimizations, and will batch the commit phase for all of the child components, together, that's why after both child render is done then only actual dom will be updated and didMount Will be called.

![React component lifecycle diagram](https://user-images.githubusercontent.com/580982/38895745-1a2ff870-424e-11e8-821a-63fc4e0d817b.jpg)

### 2 Updating:

updating stage is triggered when a component's data is updated (e.g a state or props has been changed etc).

react also provide a method to detect the Update and do something if needed via <b>componentDidUpdate method</b>

### 3 Unmounting:

Unmounting stage triggers when the element is removed from the dom, it also has a function.

<b>componentWillUnmount</b> method will be called before the components gets removed from the dom
