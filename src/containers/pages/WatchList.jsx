import Layout from '../Layout';
import GridWatchList from '../../components/Grid/GridWatchList';
import { redirectIfLoggedOut } from '../../functions';

function WatchList() {
	redirectIfLoggedOut();

	const list = JSON.parse(localStorage.getItem('users')).watchList;

	return (
		<Layout>
			<GridWatchList list={list}/>
		</Layout>
	);
}

export default WatchList;
