import { Media } from '../../interfaces/Media';
import style from './style.module.scss';

interface Props {
	content: Media;
}

function Cast({ content }: Props): JSX.Element {
	const cast = content.credits?.cast;
	const IMAGE_PLACEHOLDER = '../../../placeholder.jpg';
	const IMG_URL = 'https://image.tmdb.org/t/p/w500';

	return (
		<>
			<div className={style.cast}>
				<h2>Cast</h2>
				<div className={style.cards}>
					{cast &&
						cast.slice(0, 12).map(item => {
							let img: string;
							if (item.profile_path === null) {
								img = IMAGE_PLACEHOLDER;
							} else {
								img = IMG_URL + item.profile_path;
							}

							return (
								<div className={style.card} key={item.id}>
									<img src={img} alt={item.name} />
									<div className={style.cardContainer}>
										<p className={style.actor}>{item.name}</p>
										<p className={style.character}>{item.character}</p>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</>
	);
}

export default Cast;
