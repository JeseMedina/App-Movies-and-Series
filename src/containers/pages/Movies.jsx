import Layout from '../Layout';
import Grid from '../../components/Grid/Grid';

function Movies() {
	return (
		<Layout>
			<Grid
				name={'Movies'}
				link={
					'https://api.themoviedb.org/3/movie/popular?api_key=c4ded25acda802a0e1f075a5f5eab9db&language=es'
				}
				mediaType={'movies'}
			/>
		</Layout>
	);
}

export default Movies;
