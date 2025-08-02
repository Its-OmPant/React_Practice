import React from "react";
import ReactDOM from "react-dom/client";
import resList from "./data";

/**
 * Basic Structure
 * - Header
 * 	 - Logo
 *   - Menu
 * - Body
 * 	 - Search
 * 	 - Restaurents
 * - Footer
 *   - copyright
 *   - links
 *   - address
 *   - Contacts
 */

function Header() {
	return (
		<div className="header">
			<div className="logo">FOODIFY</div>
			<div className="menu">
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Contact US</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	);
}

function Card({ resData }) {
	const { name, cloudinaryImageId, costForTwo, cuisines } = resData?.info;
	return (
		<div className="card">
			<img
				className="image"
				src={
					"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
					cloudinaryImageId
				}
				alt="resImage"
			/>
			<h3>{name}</h3>
			<span className="cuisines">{cuisines.join(", ")}</span>
			<span className="cost">{costForTwo}</span>
		</div>
	);
}
function Body() {
	return (
		<div className="body">
			<div className="search">Search</div>
			<div className="res-container">
				{resList.map((resData) => (
					<Card resData={resData} key={resData.info.id} />
				))}
			</div>
		</div>
	);
}

const Index = () => {
	return (
		<>
			<Header />
			<Body />
		</>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
