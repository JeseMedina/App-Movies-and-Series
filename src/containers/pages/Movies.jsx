import Layout from '../Layout';
import Grid from '../../components/Grid/Grid';
import { useState, useEffect } from 'react';
import { redirectIfLoggedOut } from '../../functions';
import { BeatLoader } from 'react-spinners';

function Movies() {
	redirectIfLoggedOut();

	const [content, setContent] = useState();
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);

	useEffect(() => {
		async function getContent() {
			setLoading(true);
			const response = await fetch(
				`https://api.themoviedb.org/3/movie/popular?api_key=c4ded25acda802a0e1f075a5f5eab9db&page=${page}`
			);
			const data = await response.json();
			setContent(data.results);
			setLoading(false);
		}
		getContent();
	}, [page]);

	return (
		<Layout>
			{loading ? (
				<div className="load">
					<BeatLoader color="#fff" />
				</div>
			) : (
				content && <Grid content={content} name={'Movies'} mediaType={'movies'} />
			)}
			{content && (
				<div className="pagination">
					<button onClick={() => setPage(page - 1)} disabled={page === 1}>
						Previous
					</button>
					<span className="pag">{page}</span>
					<button onClick={() => setPage(page + 1)}>Next</button>
				</div>
			)}
		</Layout>
	);
}

export default Movies;
