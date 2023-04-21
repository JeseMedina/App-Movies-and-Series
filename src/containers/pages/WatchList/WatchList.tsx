import Layout from '../../Layout';
import GridWatchList from '../../../components/GridWatchList';
import { redirectIfLoggedOut } from '../../../functions';

function WatchList(): JSX.Element {
	redirectIfLoggedOut();
	const list: Array<string> = JSON.parse(localStorage.getItem('users') ?? '{}').watchList || [];

	return (
		<Layout>
			<GridWatchList list={list} />
		</Layout>
	);
}

export default WatchList;
