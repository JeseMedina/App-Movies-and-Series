import Layout from '../Layout';
import HeaderHome from '../../components/Header/HeaderHome';
import Carrousel from '../../components/Carrousel/Carrousel';
import { redirectIfLoggedOut } from '../../functions';

function Home() {
	redirectIfLoggedOut();
	
	return (
		<Layout>
			<HeaderHome />
			<Carrousel
				name={'Trending'}
				link={
					'https://api.themoviedb.org/3/trending/all/day?api_key=c4ded25acda802a0e1f075a5f5eab9db'
				}
				mediaType={''}
			/>
			<Carrousel
				name={'Movies'}
				link={
					'https://api.themoviedb.org/3/movie/popular?api_key=c4ded25acda802a0e1f075a5f5eab9db'
				}
				mediaType={'movies'}
			/>
			<Carrousel
				name={'Series'}
				link={'https://api.themoviedb.org/3/tv/popular?api_key=c4ded25acda802a0e1f075a5f5eab9db'}
				mediaType={'series'}
			/>
		</Layout>
	);
}

export default Home;
