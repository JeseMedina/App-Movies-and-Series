import { Media } from '../../interfaces/Media';
import axios from 'axios';
import style from './style.module.scss';
import Card from '../Card/Card';
import { moviesOrTvsWatchlist } from '../../functions';
import { useQuery } from 'react-query';
import { BeatLoader } from 'react-spinners';

function GridWatchList({ list }: { list: Array<string> }): JSX.Element {
	const {
		isLoading,
		data: content,
		error,
	} = useQuery('watchlist', async () => {
		const tempArray = [];
		for (const item of list) {
			const response = await axios.get(`https://api.themoviedb.org/3/${item}`, {
				params: {
					api_key: 'c4ded25acda802a0e1f075a5f5eab9db',
				},
			});
			const data: Media = await response.data;
			tempArray.push(data);
		}
		return tempArray;
	});

	if (isLoading) {
		return (
			<div className={style.load}>
				<BeatLoader color="#fff" />
			</div>
		);
	}

	if (error) {
		return <></>;
	}

	return (
		<>
			<div className={style.header}>
				<h2 className={style.title}>WatchList</h2>
			</div>
			<div className={style.grid}>
				{content &&
					content.map((item: Media) => {
						const id = item.id;
						const url = moviesOrTvsWatchlist(item, id);
						return item.poster_path && <Card key={item.id} item={item} url={url} />;
					})}
			</div>
		</>
	);
}

export default GridWatchList;
