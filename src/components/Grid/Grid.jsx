import { useEffect, useState } from 'react';
import { moviesOrTvs } from '../../functions';

function Grid({ name, link, mediaType }) {
	const [content, setContent] = useState([]);

	useEffect(() => {
		async function getContent() {
			const response = await fetch(link);
			const data = await response.json();
			setContent(data.results);
		}

		getContent();
	}, []);

	return (
		<>
			<div className="header">
				<h2 className="title">{name}</h2>
			</div>
			<div className="grid">
				{content.map(item => {
					const imgSrc = 'https://image.tmdb.org/t/p/w500' + item.backdrop_path;
					const mediaTypes = item.media_type;
					const id = item.id;
					let url;
					if (mediaType === 'movies') {
						url = '/movies/' + id;
					} else if (mediaType === 'tvs') {
						url = '/tvs/' + id;
					} else {
						url = moviesOrTvs(mediaTypes) + id;
					}

					if (item.backdrop_path != null) {
						return (
							<img
								key={id}
								src={imgSrc}
								alt={item.name || item.title}
								onClick={() => (document.location = url)}
							/>
						);
					}
					return null;
				})}
			</div>
		</>
	);
}

export default Grid;
