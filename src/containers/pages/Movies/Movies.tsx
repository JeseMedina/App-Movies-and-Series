import Layout from '../../Layout';
import Grid from '../../../components/Grid';
import { BeatLoader } from 'react-spinners';
import axios from 'axios';
import style from './style.module.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useInfiniteQuery } from 'react-query';

function Movies(): JSX.Element {
	const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
		['movies'],
		async ({ pageParam = 1 }) => {
			const response = await axios.get(`https://api.themoviedb.org/3/movie/popular`, {
				params: {
					api_key: 'c4ded25acda802a0e1f075a5f5eab9db',
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

	const content =
		data?.pages.reduce((prevContent, page) => prevContent.concat(page.results), []) ?? [];

	return (
		<Layout>
			{content && (
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
					<Grid name={'Movies'} content={content} mediaType={'movies'} />
				</InfiniteScroll>
			)}
		</Layout>
	);
}

export default Movies;
