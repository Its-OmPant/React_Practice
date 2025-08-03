import { IMAGE_BASE_URL } from "../utils/constants";

function Card({ resData }) {
	const { name, cloudinaryImageId, costForTwo, cuisines, avgRating } =
		resData?.info;
	return (
		<div className="card">
			<img
				className="image"
				src={IMAGE_BASE_URL + cloudinaryImageId}
				alt="resImage"
			/>
			<h3>{name}</h3>
			<span className="cuisines">{cuisines.join(", ")}</span>
			<div className="card-footer">
				<span className="cost">{costForTwo}</span>
				<span className="rating">{avgRating} ⭐</span>
			</div>
		</div>
	);
}

export default Card;
