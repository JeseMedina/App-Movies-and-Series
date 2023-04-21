import { NavLink, useNavigate } from 'react-router-dom';
import { capitalizeFirstLetter} from '../../functions';
import style from './style.module.scss';

function Navbar() {
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const userName = capitalizeFirstLetter(JSON.parse(localStorage.getItem('users')!).user);

	const navigate = useNavigate();
	const handleLogout = () => {
		sessionStorage.setItem('isLoggedIn', 'false');
		navigate('/login');
	};

	return (
		<header>
			<div className={style.container}>
				<nav>
					<NavLink to="/">
						Home
					</NavLink>
					<NavLink to="/movies">
						Movies
					</NavLink>
					<NavLink to="/tvs">
						Tvs
					</NavLink>
					<NavLink to="/watchlist">
						WatchList
					</NavLink>
					<NavLink to="/search">
						Search
					</NavLink>
				</nav>
				<div className={style.user}>
					<span className={style.userName}>{userName}</span>
					<button onClick={handleLogout}>LogOut</button>
				</div>
			</div>
		</header>
	);
}

export default Navbar;
