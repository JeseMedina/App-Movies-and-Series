import { Link } from 'react-router-dom';
import { moviesOrTvs } from '../../functions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faPlay } from '@fortawesome/free-solid-svg-icons';

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

const getTrending = async () => {
	const response = await fetch(
		'https://api.themoviedb.org/3/trending/all/day?api_key=c4ded25acda802a0e1f075a5f5eab9db'
	);
	return response.json();
};

const trending = await getTrending();
const info = trending.results[getRandomInt(19)];
const poster = `https://www.themoviedb.org/t/p/w1280${info.backdrop_path}`;
const mediaType = info.media_type;
const id = info.id;
const url = moviesOrTvs(mediaType) + id;

function HeaderHome() {
	return (
		<>
			<div
				className="main-movie"
				style={{
					background: `url(${poster}) no-repeat center`,
					backgroundSize: 'cover',
				}}
			>
				<div className="container">
					<h3 className="title">{info.name || info.title}</h3>
					<p className="description">{info.overview}</p>
					<div className="buttons">
						<button className="button">
							<FontAwesomeIcon icon={faPlay} /> Reproducir
						</button>
						<Link to={url} className="button">
							<FontAwesomeIcon icon={faInfoCircle} /> Más información
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default HeaderHome;
