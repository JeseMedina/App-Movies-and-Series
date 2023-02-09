function Cast({ content }) {
	const cast = content.credits.cast;
	const IMAGE_PLACEHOLDER = '../../../public/placeholder.png';
	const IMG_URL = 'https://image.tmdb.org/t/p/w500';
	return (
		<>
			<div className="cast">
				<h2>Cast</h2>
				<div className="cards">
					{cast.slice(0, 12).map(item => {
						let img;
						if (item.profile_path === null) {
							img = IMAGE_PLACEHOLDER;
						} else {
							img = IMG_URL + item.profile_path;
						}

						return (
							<div className="card" key={item.id}>
								<img src={img} alt={item.name} />
								<div className="card-container">
									<p className="actor">{item.name}</p>
									<p className="character">{item.character}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default Cast;
