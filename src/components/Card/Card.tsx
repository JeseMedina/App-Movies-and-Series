import { Link } from 'react-router-dom';
import style from './style.module.scss';
import { Media } from '../../interfaces/Media';

function Card({ item, url }: { item: Media; url: string }) {
	const imageUrl = 'https://image.tmdb.org/t/p/w300' + item.poster_path;
	const title = item.title || item.name;

	return (
		<Link to={url}>
			<img width={230} height={345} className={style.img} src={imageUrl} alt={title} />
		</Link>
	);
}

export default Card;
