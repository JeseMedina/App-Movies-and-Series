import Error404 from './containers/errors/Error404';
import Home from './containers/pages/Home';
import Movies from './containers/pages/Movies';
import Movie from './containers/pages/Movie';
import Tvs from './containers/pages/Tvs';
import Tv from './containers/pages/Tv';
import Search from './containers/pages/Search';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import './style.scss';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="" element={<Navigate to="/home" />} />
					{/* Error404 */}
					<Route path="*" element={<Error404 />} />
					{/* Home */}
					<Route path="/home" element={<Home />} />
					{/* Movies */}
					<Route path="/movies" element={<Movies />} />
					<Route path="/movies/:movie_id" element={<Movie />} />
					{/* Tvs */}
					<Route path="/tvs" element={<Tvs />} />
					<Route path="/tvs/:tv_id" element={<Tv />} />
					{/* Search */}
					<Route path="/search" element={<Search />} />
					<Route path="/search/:term" element={<Search />} />
					{/* Watchlist */}
					{/* <Route path="/watchlist" element={<WatchList />} /> */}
				</Routes>
			</Router>
		</>
	);
}

export default App;
