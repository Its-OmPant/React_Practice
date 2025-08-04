import React, { Component } from "react";

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

export default User;
