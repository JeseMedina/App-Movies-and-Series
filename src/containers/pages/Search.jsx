import Layout from '../Layout';
import GridSearch from '../../components/Grid/GridSearch';
import { useState, useEffect } from 'react';

function Search() {
	const [content, setContent] = useState();
	const [search, setSearch] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function getContent() {
			setLoading(true);
			const response = await fetch(
				`https://api.themoviedb.org/3/search/multi?api_key=c4ded25acda802a0e1f075a5f5eab9db&query=${search}&page=1&language=es`
			);
			const data = await response.json();
			setContent(data.results);
			setLoading(false);
		}
		if (search) {
			getContent();
		}
	}, [search]);

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
				<div className="loading">Loading...</div>
			) : (
				search && <GridSearch content={content} />
			)}
		</Layout>
	);
}

export default Search;
