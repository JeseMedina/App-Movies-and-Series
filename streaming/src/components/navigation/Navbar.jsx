import { NavLink } from 'react-router-dom'

const navigation = [
    { name: 'Home', href: '/home', current: true },
    { name: 'Movies', href: '/movies', current: false },
    { name: 'Series', href: '/series', current: false },
    { name: 'WatchList', href: '/watchlist', current: false },
    { name: 'Search', href: '/search', current: false }
]


function Navbar() {
    return (
        <header>
            <div className="container">
                <nav>
                    <NavLink to="/home" className="active nav-link">Inicio</NavLink>
                    <NavLink to="/movie" className="nav-link">Películas</NavLink>
                    <NavLink to="/series" className="nav-link">Series</NavLink>
                    <NavLink to="/watchlist" className="nav-link">WatchList</NavLink>
                    <NavLink to="/search" className="nav-link">Serch</NavLink>
                </nav>
                <div className="login">
                    <a>Jesé
                        <i className="fa-solid fa-skull"></i>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Navbar