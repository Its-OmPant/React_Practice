import { useState } from "react";

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
					<li>Home</li>
					<li>About</li>
					<li>Contact US</li>
					<li>Cart</li>
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
