import Error404 from './containers/errors/Error404';
import Home from './containers/pages/Home';
import Movies from './containers/pages/Movies';
import Movie from './containers/pages/Movie';
import Tvs from './containers/pages/Tvs';
import Tv from './containers/pages/Tv';
import Search from './containers/pages/Search';
import Login from './containers/pages/Login';
import Signup from './containers/pages/Signup';
import WatchList from './containers/pages/WatchList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.scss';

function App() {
	return (
		<Router>
			<Routes>
				{/* Error404 */}
				<Route path="*" element={<Error404 />} />
				{/* Home */}
				<Route path="/" element={<Home />} />
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
				<Route path="/watchlist" element={<WatchList />} />
				{/* Login */}
				<Route path="/login" element={<Login />} />
				{/* Signup */}
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</Router>
	);
}

export default App;
