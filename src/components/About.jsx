import React from "react";
import User from "./User";

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
export default About;
