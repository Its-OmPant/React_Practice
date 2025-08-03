function ShimmerBody() {
	let arr = new Array(15);

	arr.fill(" ");
	return (
		<div className="shimmer-body">
			{arr.map((v, i) => (
				<div className="shimmer-card" key={i}>
					<div className="shimmer-img"></div>
					<span className="shimmer-name"></span>
					<span className="shimmer-cuisines"></span>
					<div className="card-footer">
						<span className="shimmer-cost"></span>
						<span className="shimmer-rating"></span>
					</div>
				</div>
			))}
		</div>
	);
}

export default ShimmerBody;
