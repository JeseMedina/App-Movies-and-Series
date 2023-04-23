import style from './style.module.scss';
import { Cast } from '../../interfaces/Media';

function CardCast({ item }: { item: Cast }) {
	const img = 'https://image.tmdb.org/t/p/w500' + item.profile_path;
	const name = item.name;
	const character = item.character;

	return (
		<div className={style.card}>
			<img src={img} alt={item.name} />
			<div className={style.cardContainer}>
				<p className={style.actor}>{name}</p>
				<p className={style.character}>{character}</p>
			</div>
		</div>
	);
}

export default CardCast;
