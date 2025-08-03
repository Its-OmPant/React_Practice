import { IMAGE_BASE_URL } from "../utils/constants";

function Card({ resData }) {
	const { name, cloudinaryImageId, costForTwo, cuisines, avgRating } =
		resData;
	return (
		<div className="card">
			<img
				className="image"
				src={IMAGE_BASE_URL + cloudinaryImageId}
				alt="resImage"
			/>
			<h3 className="">{name}</h3>
			<div className="cuisines">{cuisines.join(", ")}</div>
			<div className="card-footer">
				<span className="cost">{costForTwo}</span>
				<span className="rating">{avgRating} ⭐</span>
			</div>
		</div>
	);
}

export default Card;
