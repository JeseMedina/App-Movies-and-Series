import { Link } from 'react-router-dom';
import { FC } from 'react';
import { Media } from '../../interfaces/Media';
import style from './style.module.scss';

interface SeasonsProps {
	content: Media;
}

const Seasons: FC<SeasonsProps> = ({ content }) => {
	return (
		<div className={style.seasons}>
			<h2>Seasons</h2>
			<div className={style.seasonsGrid}>
				{content.seasons &&
					content.seasons.map(season => (
						<Link
							to={`/tvs/${content.id}/seasons/${season.season_number}`}
							key={season.id}
							className={style.season}
						>
							{season.name}
						</Link>
					))}
			</div>
		</div>
	);
};

export default Seasons;
