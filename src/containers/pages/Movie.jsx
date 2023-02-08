import HeaderContent from '../../components/Header/HeaderContent';
import DataSheet from '../../components/DataSheet/DataSheet';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from '../Layout';
import Cast from '../../components/DataSheet/Cast';
import Carrousel from '../../components/Carrousel/Carrousel';
import { redirectIfLoggedOut } from '../../functions';
import { BeatLoader } from 'react-spinners';

function Movie() {
	redirectIfLoggedOut();

	const params = useParams();
	const id = params.movie_id;

	const [content, setContent] = useState();

	useEffect(() => {
		async function getContent() {
			const response = await fetch(
				`https://api.themoviedb.org/3/movie/${id}?api_key=c4ded25acda802a0e1f075a5f5eab9db&append_to_response=credits`
			);
			const data = await response.json();
			setContent(data);
		}
		getContent();
	}, []);

	return (
		<Layout>
			{content ? (
				<>
					<HeaderContent content={content} mediaType={'movie'} />
					<main className="container">
						<DataSheet content={content} mediaType={'movies'} />
						<Cast content={content} mediaType={'movies'} />
					</main>
					<Carrousel
						name={'Similar'}
						link={`https://api.themoviedb.org/3/movie/${id}/similar?api_key=c4ded25acda802a0e1f075a5f5eab9db`}
						mediaType={'movies'}
					/>
				</>
			) : (
				<div className="load">
					<BeatLoader color="#fff" />
				</div>
			)}
		</Layout>
	);
}

export default Movie;
