import Layout from '../../Layout';
import GridSearch from '../../../components/GridSearch';
import React, { useRef, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import axios from 'axios';
import style from './style.module.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useInfiniteQuery } from 'react-query';
import { redirectIfLoggedOut } from '../../../functions';

function Search(): JSX.Element {
	redirectIfLoggedOut();
	const [search, setSearch] = useState<string>('');
	const inputRef = useRef<HTMLInputElement>(null);
	const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
		['search', search],
		async ({ pageParam = 1 }) => {
			const response = await axios.get(`https://api.themoviedb.org/3/search/multi`, {
				params: {
					api_key: 'c4ded25acda802a0e1f075a5f5eab9db',
					query: search,
					page: pageParam,
				},
			});
			return response.data;
		},
		{
			getNextPageParam: lastPage => {
				if (lastPage.page === lastPage.total_pages) return false;
				return lastPage.page + 1;
			},
		}
	);

	let content = [];
	content = data?.pages.reduce((prevContent, page) => prevContent.concat(page.results), []) ?? [];

	const searchMovie = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			content = [];
			setSearch(e.currentTarget.value);
		}
	};

	const clearSearch = () => {
		setSearch('');
		if (inputRef.current) {
			inputRef.current.value = '';
		}
	};

	return (
		<Layout>
			<div className={style.search}>
				<input
					type="text"
					placeholder="Enter Tittle"
					className={style.inputText}
					onKeyDown={searchMovie}
					ref={inputRef}
				/>
				{search && <button onClick={clearSearch}>X</button>}
			</div>
			{search && content.length > 0 ? (
				<InfiniteScroll
					dataLength={content.length}
					hasMore={hasNextPage || isLoading}
					next={() => fetchNextPage()}
					loader={
						<div className={style.load}>
							<BeatLoader color="#fff" />
						</div>
					}
				>
					<GridSearch content={content} />
				</InfiniteScroll>
			) : null}
			{!search && <div className={style.message}>Please enter a search query</div>}
			{search && content.length === 0 && <div className={style.message}>No results found.</div>}
		</Layout>
	);
}

export default Search;
