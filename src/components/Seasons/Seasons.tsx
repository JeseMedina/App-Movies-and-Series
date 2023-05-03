import { Link } from 'react-router-dom';
import { Media } from '../../interfaces/Media';
import style from './style.module.scss';

function Seasons({ content }: { content: Media }): JSX.Element {
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
}

export default Seasons;
