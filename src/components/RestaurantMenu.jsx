import React from "react";
import { useParams } from "react-router";

function RestaurantMenu() {
	/**
	 * ToDO: make use of useParams to show dynamic menu
	 * after adding the menu mock data
	 */
	return (
		<div className="menu-container">
			<h2 className="res-name">Restaurant Name</h2>
			<h6 className="menu-text"> ➡️ MENU ⬅️</h6>
			<div className="main-menu">
				<ul>
					<li>Item 1</li>
					<li>Item 2</li>
					<li>Item 3</li>
				</ul>
			</div>
		</div>
	);
}

export default RestaurantMenu;
