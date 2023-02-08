import Layout from '../Layout';
import GridSearch from '../../components/Grid/GridSearch';
import { useState, useEffect } from 'react';
import { redirectIfLoggedOut } from '../../functions';
import { BeatLoader } from 'react-spinners';

function Search() {
	redirectIfLoggedOut();

	const [content, setContent] = useState();
	const [search, setSearch] = useState();
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);

	useEffect(() => {
		async function getContent() {
			setLoading(true);
			const response = await fetch(
				`https://api.themoviedb.org/3/search/multi?api_key=c4ded25acda802a0e1f075a5f5eab9db&query=${search}&page=${page}`
			);
			const data = await response.json();
			setContent(data.results);
			setLoading(false);
		}
		if (search) {
			getContent();
		}
	}, [search, page]);

	const searchMovie = e => {
		if (e.key === 'Enter') {
			setSearch(e.target.value);
		}
	};

	return (
		<Layout>
			<div className="search">
				<input
					type="text"
					placeholder="Enter Tittle"
					className="inputText"
					value={search}
					onChange={e => setSearch(e.target.value)}
					onKeyDown={searchMovie}
				/>
				{search && <button onClick={() => setSearch('')}>X</button>}
			</div>
			{loading ? (
				<div className="load">
					<BeatLoader color="#fff" />
				</div>
			) : (
				search && <GridSearch content={content} />
			)}
			{search && (
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

export default Search;
