import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { moviesOrTvs } from '../../functions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faPlay } from '@fortawesome/free-solid-svg-icons';

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function HeaderHome() {
	const [content, setContent] = useState();

	useEffect(() => {
		async function getContent() {
			const response = await fetch(
				`https://api.themoviedb.org/3/trending/all/day?api_key=c4ded25acda802a0e1f075a5f5eab9db`
			);
			const data = await response.json();
			setContent(data.results[getRandomInt(19)]);
		}
		getContent();
	}, []);

	return content ? (
		<div
			className="main-movie"
			style={{
				backgroundImage: `url(https://www.themoviedb.org/t/p/w1280${content.backdrop_path})`,
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}
		>
			<div className="container">
				<h1 className="title">{content.name || content.title}</h1>
				<p className="description">{content.overview}</p>
				<div className="buttons">
					<button className="button">
						<FontAwesomeIcon icon={faPlay} /> Play
					</button>
					<Link to={moviesOrTvs(content.media_type) + content.id} className="button">
						<FontAwesomeIcon icon={faInfoCircle} /> More Info.
					</Link>
				</div>
			</div>
		</div>
	) : (
		<></>
	);
}

export default HeaderHome;
