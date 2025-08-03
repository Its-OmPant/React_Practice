import React, { useEffect, useState } from "react";

import Card from "./Card";
import resList from "../utils/mockData";
import ShimmerBody from "./ShimmerBody";
import { Link } from "react-router";

function Body() {
	const [initialData, setInitialData] = useState([]);
	const [restaurantsList, setRestaurantsList] = useState(initialData);
	const [isOnlyTopRestaurant, setIsOnlyTopRestaurant] = useState(false);
	const [query, setQuery] = useState("");

	function TopRatedFilterToggleHandler(e) {
		e.preventDefault();
		if (isOnlyTopRestaurant) {
			setRestaurantsList(initialData);
		} else {
			let filteredData = restaurantsList.filter(
				(d) => d.avgRating >= 4.4
			);
			setRestaurantsList(filteredData);
		}
		setIsOnlyTopRestaurant(!isOnlyTopRestaurant);
	}

	function handleQueryChange(e) {
		e.preventDefault();
		setQuery(e.target.value);
	}

	function search(e) {
		e.preventDefault();
		if (query === "") {
			alert("Please Enter Query To Search");
		}

		const searchResult = resList.filter((data) => {
			return data?.name?.toLowerCase().includes(query.toLowerCase());
		});

		if (searchResult.length === 0) {
			alert("Not Found");
			setQuery("");
			return;
		}
		setRestaurantsList(searchResult);
	}

	useEffect(() => {
		setTimeout(() => {
			setInitialData(resList);
			setRestaurantsList(resList);
		}, 300);
	}, []);

	if (restaurantsList.length === 0) {
		return <ShimmerBody />;
	}
	return (
		<div className="body">
			<div className="top-container">
				<div className="filter-container">
					<div
						className={`filter ${
							isOnlyTopRestaurant ? "active" : "inactive"
						}`}
						onClick={TopRatedFilterToggleHandler}
					>
						Top Rated Restaurents
					</div>
				</div>
				<div className="search-container">
					<div className="search">
						<input
							type="text"
							name=""
							id=""
							value={query}
							onChange={handleQueryChange}
						/>
						<button type="submit" onClick={search}>
							search
						</button>
					</div>
				</div>
			</div>
			<div className="res-container">
				{restaurantsList.map((resData) => (
					<Link
						className="card-link"
						key={resData.id}
						to={`restaurants/${resData.parentId}`}
					>
						<Card resData={resData} />
					</Link>
				))}
			</div>
		</div>
	);
}

export default Body;
