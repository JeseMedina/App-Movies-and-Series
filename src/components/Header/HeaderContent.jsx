import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faPlay } from '@fortawesome/free-solid-svg-icons';

function HeaderContent({ content, mediaType }) {
	const poster = `https://www.themoviedb.org/t/p/w1280${content.backdrop_path}`;

	const handleAddToWatchList = e => {
		const users = JSON.parse(localStorage.getItem('users'))
		users.watchList.push(`${mediaType}/${content.id}`)
		localStorage.setItem('users', JSON.stringify( users ));
	}

	return (
		<div
			className="selected-movie"
			style={{
				background: `url(${poster}) no-repeat center`,
				backgroundSize: 'cover',
			}}
		>
			<div className="container">
				<h1 className="title">{content.title || content.name}</h1>

				<div className="buttons">
					<button role="button" className="button" onClick={handleAddToWatchList}>
						<FontAwesomeIcon icon={faPlusCircle} /> Agregar a mi lista
					</button>
					{/* Link to video */}
					<button role="button" className="button">
						<FontAwesomeIcon icon={faPlay} /> Reproducir
					</button>
				</div>
			</div>
		</div>
	);
}

export default HeaderContent;
