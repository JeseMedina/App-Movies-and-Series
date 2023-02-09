import HeaderContent from '../../components/Header/HeaderContent';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../Layout';

function Season() {
	const params = useParams();
	const tvId = params.tv_id;
	const seasonId = params.season_id;

	const [season, setSeason] = useState();
	const [content, setContent] = useState();

	useEffect(() => {
		async function getseason() {
			const response = await fetch(
				`https://api.themoviedb.org/3/tv/${tvId}/season/${seasonId}?api_key=c4ded25acda802a0e1f075a5f5eab9db`
			);

			const data = await response.json();
			setSeason(data);
		}
		async function getContent() {
			const response = await fetch(
				`https://api.themoviedb.org/3/tv/${tvId}?api_key=c4ded25acda802a0e1f075a5f5eab9db`
			);

			const data = await response.json();
			setContent(data);
		}
		getContent();
		getseason();
	}, []);

	return (
		<Layout>
			{season && content ? (
				<>
					<HeaderContent content={content} mediaType={'tv'} />
					<p></p>
					<main className="container container-season">
						<div className="season">
							<h2>{season.name}</h2>
							<img
								loading="lazy"
								src={`https://www.themoviedb.org/t/p/w500${season.poster_path}`}
								alt={season.name}
							/>
						</div>
						<div className="episodes">
							<h2>Episodes</h2>
							{season.episodes.map(episodes => {
								return (
									<div key={episodes.id} className="episode">
										<h3>
											{episodes.episode_number}. {episodes.name}
										</h3>
										<p>{episodes.overview}</p>
									</div>
								);
							})}
						</div>
					</main>
				</>
			) : (
				<></>
			)}
		</Layout>
	);
}

export default Season;
