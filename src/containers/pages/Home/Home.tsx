import Layout from '../../Layout';
import HeaderHome from '../../../components/HeaderHome';
import Carrousel from '../../../components/Carrousel';
import { redirectIfLoggedOut } from '../../../functions';

function Home(): JSX.Element {
    redirectIfLoggedOut();
	return (
		<Layout>
			<HeaderHome />
			<Carrousel
				name={'Trending'}
				link={'https://api.themoviedb.org/3/trending/all/day?'}
				mediaType={''}
			/>
			<Carrousel
				name={'Movies'}
				link={'https://api.themoviedb.org/3/movie/popular?'}
				mediaType={'movies'}
			/>
			<Carrousel
				name={'Series'}
				link={'https://api.themoviedb.org/3/tv/popular?'}
				mediaType={'series'}
			/>
		</Layout>
	);
}

export default Home;
