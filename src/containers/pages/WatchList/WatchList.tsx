import Layout from '../../Layout';
import GridWatchList from '../../../components/GridWatchList';

function WatchList(): JSX.Element {
	const list: Array<string> = JSON.parse(localStorage.getItem('users') ?? '{}').watchList || [];

	return (
		<Layout>
			<GridWatchList list={list} />
		</Layout>
	);
}

export default WatchList;
