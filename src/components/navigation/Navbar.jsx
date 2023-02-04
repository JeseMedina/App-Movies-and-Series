import { NavLink } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../functions';

function Navbar() {
	const userName = capitalizeFirstLetter(JSON.parse(localStorage.getItem('users')).user)

	return (
		<header>
			<div className="container">
				<nav>
					<NavLink to="/" className="nav-link">
						Home
					</NavLink>
					<NavLink to="/movies" className="nav-link">
						Movies
					</NavLink>
					<NavLink to="/tvs" className="nav-link">
						Tvs
					</NavLink>
					<NavLink to="/watchlist" className="nav-link">
						WatchList
					</NavLink>
					<NavLink to="/search" className="nav-link">
						Serch
					</NavLink>
				</nav>
				<div className="user">
					<a>
						{userName}
						<i className="fa-solid fa-skull"></i>
					</a>
				</div>
			</div>
		</header>
	);
}

export default Navbar;
