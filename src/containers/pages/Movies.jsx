import Layout from '../Layout';
import Grid from '../../components/Grid/Grid';
import { redirectIfLoggedOut } from '../../functions';

function Movies() {
	redirectIfLoggedOut();

	return (
		<Layout>
			<Grid
				name={'Movies'}
				link={'https://api.themoviedb.org/3/movie/popular?api_key=c4ded25acda802a0e1f075a5f5eab9db'}
				mediaType={'movies'}
			/>
		</Layout>
	);
}

export default Movies;
