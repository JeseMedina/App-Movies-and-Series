import HeaderContent from '../../../components/HeaderContent';
import DataSheet from '../../../components/DataSheet';
import { useParams } from 'react-router-dom';
import Layout from '../../Layout';
import { useQuery } from 'react-query';
import Cast from '../../../components/Cast';
import Carrousel from '../../../components/Carrousel';
import { BeatLoader } from 'react-spinners';
import { Media } from '../../../interfaces/Media';
import axios from 'axios';
import style from './style.module.scss';

function Movie(): JSX.Element {
	const params = useParams<{ movie_id: string }>();
	const id = params.movie_id;
	const {
		isLoading,
		data: content,
		error,
	} = useQuery<Media>(['movie', id], async () => {
		const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
			params: {
				api_key: 'c4ded25acda802a0e1f075a5f5eab9db',
				append_to_response: 'credits',
			},
		});
		return response.data;
	});

	if (isLoading) {
		return (
			<Layout>
				<div className={style.load}>
					<BeatLoader color="#fff" />
				</div>
			</Layout>
		);
	}

	if (error) return <></>;

	return (
		<Layout>
			{content && (
				<>
					<HeaderContent content={content} mediaType={'movie'} />
					<main className={style.container}>
						<DataSheet content={content} mediaType={'movies'} />
						<Cast content={content} />
					</main>
					<Carrousel
						name={'Similar'}
						link={`https://api.themoviedb.org/3/movie/${id}/similar`}
						mediaType={'movies'}
					/>
				</>
			)}
		</Layout>
	);
}

export default Movie;
