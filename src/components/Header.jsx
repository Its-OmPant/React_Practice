import { useState } from "react";
import { Link } from "react-router";

function Header() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	function toggleLoginHandler() {
		setIsLoggedIn(isLoggedIn ? false : true);
	}
	return (
		<div className="header">
			<div className="logo">FOODIFY</div>
			<div className="menu">
				<ul>
					<li>
						<Link to="/"> Home</Link>
					</li>
					<li>
						<Link to="about"> About</Link>
					</li>
					<li>
						<Link to="contact"> Contact Us</Link>
					</li>
					<li>
						<Link to="cart"> Cart</Link>
					</li>
					<li>
						<button className="login" onClick={toggleLoginHandler}>
							{isLoggedIn ? "Logout" : "Login"}
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;
