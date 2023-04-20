import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faPlay } from '@fortawesome/free-solid-svg-icons';
import style from './style.module.scss';
import { MediaHeader } from '../../interfaces/Media';

interface Props {
	content: MediaHeader;
	mediaType: string;
}

function HeaderContent({ content, mediaType }: Props) {
	const poster = `https://www.themoviedb.org/t/p/w1280${content.backdrop_path}`;

	const handleAddToWatchList = () => {
		const users = JSON.parse(localStorage.getItem('users') || '{}');
		users.watchList.push(`${mediaType}/${content.id}`);
		localStorage.setItem('users', JSON.stringify(users));
	};

	return (
		<div
			className={style.selectedMovie}
			style={{
				background: `url(${poster}) no-repeat center`,
				backgroundSize: 'cover',
			}}
		>
			<div className={style.container}>
				<h1 className={style.title}>{content.title || content.name}</h1>
				<div className={style.buttons}>
					<button role="button" className={style.button} onClick={handleAddToWatchList}>
						<FontAwesomeIcon icon={faPlusCircle} /> Add to WatchList
					</button>
					{/* Link to video */}
					<button role="button" className={style.button}>
						<FontAwesomeIcon icon={faPlay} /> Play
					</button>
				</div>
			</div>
		</div>
	);
}

export default HeaderContent;
