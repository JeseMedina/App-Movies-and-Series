import { useEffect, useState } from 'react';
import { movieOrTv } from '../../functions';

function Cast({ content, mediaType }) {
	const [cast, setCast] = useState([]);

	useEffect(() => {
		async function getCast() {
			const response = await fetch(
				`https://api.themoviedb.org/3/${movieOrTv(mediaType)}/${
					content.id
				}/credits?api_key=c4ded25acda802a0e1f075a5f5eab9db&language=es`
			);
			const data = await response.json();
			setCast(data.cast);
		}
		getCast();
	}, []);

	const IMG_URL = 'https://image.tmdb.org/t/p/w500';
	return (
		<>
			<div className="cast">
				<h3>Reparto</h3>
				<div className="cards">
					{cast.slice(0, 12).map(item => {
						let img;
						if (item.profile_path === null) {
							img =
								'https://d3jh33bzyw1wep.cloudfront.net/s3/W1siZiIsImNvbXBpbGVkX3RoZW1lX2Fzc2V0cy9FTElHTyBSRUNSVUlUTUVOVC9wbmcvdXNlci1wcm9maWxlLWRlZmF1bHQucG5nIl1d';
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
