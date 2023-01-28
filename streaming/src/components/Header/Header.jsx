import { Link } from 'react-router-dom'
import { movieOrSerie } from '../../functions';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const getTrending = async () => {
    const response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=c4ded25acda802a0e1f075a5f5eab9db&language=es');
    return response.json();
}

const trending = await getTrending();
const info = trending.results[getRandomInt(19)]
const poster = `https://www.themoviedb.org/t/p/w1280${info.backdrop_path}`;
const media_type = info.media_type;
const id = info.id
const url = movieOrSerie(media_type) + id;

function Header() {
    return (
        <>
            <div className="main-movie" style={{ background: `url(${poster}) no-repeat center`, backgroundSize: 'cover' }}>
                <div className="container">
                    <h3 className="title">{info.name || info.title}</h3>
                    <p className="description">{info.overview}</p>
                    <div className="buttons">
                        <button
                            className="button"><i className="fa-solid fa-play"></i> Reproducir</button>
                        <Link to={url} className="button">
                            <i className="fa-solid fa-circle-info"></i> Más información
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header