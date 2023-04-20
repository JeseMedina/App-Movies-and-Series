import HeaderContent from '../../../components/HeaderContent';
import { useParams } from 'react-router-dom';
import Layout from '../../Layout';
import axios from 'axios';
import style from './style.module.scss';
import { BeatLoader } from 'react-spinners';
import { useQuery } from 'react-query';
import { Episode } from '../../../interfaces/Media';

function Season() {
	const params = useParams<{ tv_id: string; season_id: string }>();
	const tvId = params.tv_id;
	const seasonId = params.season_id;

	const seasonQueryKey = ['season', tvId, seasonId];
	const contentQueryKey = ['content', tvId];

	const {
		isLoading: seasonLoading,
		isError: seasonError,
		data: season,
	} = useQuery(seasonQueryKey, async () => {
		const response = await axios.get(`https://api.themoviedb.org/3/tv/${tvId}/season/${seasonId}`, {
			params: {
				api_key: 'c4ded25acda802a0e1f075a5f5eab9db',
			},
		});
		return response.data;
	});
	const {
		isLoading: contentLoading,
		isError: contentError,
		data: content,
	} = useQuery(contentQueryKey, async () => {
		const response = await axios.get(`https://api.themoviedb.org/3/tv/${tvId}`, {
			params: {
				api_key: 'c4ded25acda802a0e1f075a5f5eab9db',
			},
		});
		return response.data;
	});

	if (seasonError || contentError) {
		return <></>;
	}

	return (
		<Layout>
			{season && content && (
				<>
					{contentLoading ? (
						<div className={style.load}>
							<BeatLoader color="#fff" />
						</div>
					) : (
						<HeaderContent content={content} mediaType={'tv'} />
					)}
					{seasonLoading ? (
						<div className={style.load}>
							<BeatLoader color="#fff" />
						</div>
					) : (
						<main className={style.container}>
							<div className={style.season}>
								<h2>{season.name}</h2>
								{season.poster_path && (
									<img
										loading="lazy"
										src={`https://www.themoviedb.org/t/p/w500${season.poster_path}`}
										alt={season.name}
									/>
								)}
							</div>
							<div className={style.episodes}>
								<h2>Episodes</h2>
								{season.episodes &&
									season.episodes.map((episode: Episode) => {
										return (
											<div key={episode.id} className={style.episode}>
												<h3>
													{episode.episode_number}. {episode.name}
												</h3>
												<p>{episode.overview}</p>
											</div>
										);
									})}
							</div>
						</main>
					)}
				</>
			)}
		</Layout>
	);
}

export default Season;
