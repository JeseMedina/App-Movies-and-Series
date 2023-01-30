import { Link } from 'react-router-dom'
import { movieOrSerie } from '../../functions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faPlay } from '@fortawesome/free-solid-svg-icons';


function HeaderMovie({title,link,backdrop}) {

    const poster = `https://www.themoviedb.org/t/p/w1280${backdrop}`;

    return (
        <div className="selected-movie" style={{ background: `url(${poster}) no-repeat center`, backgroundSize: 'cover' }}>
            <div className="container">
                <h3 className="title">{title}</h3>

                <div className="buttons">
                    <button role="button"
                        className="button"><FontAwesomeIcon icon={faPlusCircle} /> Agregar a mi
                        lista</button>
                    <button role="button"
                        className="button"><FontAwesomeIcon icon={faPlay} />  Reproducir</button>
                </div>
            </div>
        </div>
    )
}

export default HeaderMovie