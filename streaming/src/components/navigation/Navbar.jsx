import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <header>
            <div className="container">
                <nav>
                    <NavLink to="/home" className="active nav-link">Home</NavLink>
                    <NavLink to="/movies" className="nav-link">Movies</NavLink>
                    <NavLink to="/tvs" className="nav-link">Tvs</NavLink>
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