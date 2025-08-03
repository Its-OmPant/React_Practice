import React, { useState } from "react";

import Card from "./Card";
import resList from "../utils/mockData";

function Body() {
	const [initialData, setInitialData] = useState(resList);
	const [restaurantsList, setRestaurantsList] = useState(initialData);

	function handleTopRatedFilter(e) {
		e.preventDefault();
		let filteredData = restaurantsList.filter(
			(d) => d.info.avgRating >= 4.4
		);
		console.log(filteredData);
		setRestaurantsList(filteredData);
	}

	function handleClearFilter(e) {
		e.preventDefault();
		setRestaurantsList(initialData);
	}

	return (
		<div className="body">
			<div className="filter-container">
				<div className="filter" onClick={handleTopRatedFilter}>
					Top Rated Restaurents
				</div>
				<div
					className="filter clear-filter"
					onClick={handleClearFilter}
				>
					Clear ❌
				</div>
			</div>
			<div className="res-container">
				{restaurantsList.map((resData) => (
					<Card resData={resData} key={resData.info.id} />
				))}
			</div>
		</div>
	);
}

export default Body;
