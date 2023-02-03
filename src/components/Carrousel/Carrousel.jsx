import { useEffect, useState } from 'react';
import { moviesOrTvs } from '../../functions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Carrousel({ name, link, mediaType }) {
	const [content, setContent] = useState([]);

	useEffect(() => {
		async function getContent(link) {
			const response = await fetch(link);
			const data = await response.json();
			setContent(data.results);
		}

		getContent(link);
	}, []);

	return (
		<div className="row">
			<div className="header">
				<h3 className="title">{name}</h3>
				<div className="progress-bar">
					<div className="progress-item active"></div>
					<div className="progress-item"></div>
					<div className="progress-item"></div>
					<div className="progress-item"></div>
				</div>
			</div>
			<div className="carousel">
				<button className="handle left-handle">
					<FontAwesomeIcon className="text" icon={faChevronLeft} />
				</button>
				<div className="slider">
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
				<button className="handle right-handle">
					<FontAwesomeIcon className="text" icon={faChevronRight} />
				</button>
			</div>
		</div>
	);
}

export default Carrousel;
