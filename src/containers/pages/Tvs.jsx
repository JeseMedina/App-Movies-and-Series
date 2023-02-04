import Layout from '../Layout';
import Grid from '../../components/Grid/Grid';
import { redirectIfLoggedOut } from '../../functions';

function Tvs() {
	redirectIfLoggedOut();

	return (
		<Layout>
			<Grid
				name={'Series'}
				link={'https://api.themoviedb.org/3/tv/popular?api_key=c4ded25acda802a0e1f075a5f5eab9db'}
				mediaType={'tvs'}
			/>
		</Layout>
	);
}

export default Tvs;
