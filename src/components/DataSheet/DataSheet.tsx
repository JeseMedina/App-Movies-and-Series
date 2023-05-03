import { getDate } from '../../functions';
import { Media } from '../../interfaces/Media';
import style from './style.module.scss';

function DataSheet({ content }: { content: Media }): JSX.Element {
	const clasification =
		content.release_dates &&
		content.release_dates.results.find(item => item.iso_3166_1 === 'US')?.release_date[0]
			.certification;

	return (
		<>
			<div className={style.info}>
				<div className={style.synopsis}>
					<h2>Sinopsis</h2>
					<p>{content.overview}</p>
				</div>
				<div className={style.dataSheet}>
					<h2>Data Sheet</h2>
					<div className={style.details}>
						{content.genres && (
							<div>
								<div className={style.dataTitle}>Genre</div>
								<div className={style.dataDescription}>
									{content.genres.map(({ name }) => name).join(', ') || ''}
								</div>
							</div>
						)}
						<div>
							<div className={style.dataTitle}>Release</div>
							<div className={style.dataDescription}>{getDate(content)}</div>
						</div>
						{content.vote_average && (
							<div>
								<div className={style.dataTitle}>Qualification (TMDB)</div>
								<div className={style.dataDescription}>
									{content.vote_average.toFixed(1) + '/10'}
								</div>
							</div>
						)}
						{clasification && (
							<div>
								<div className={style.dataTitle}>Clasification</div>
								<div className={style.dataDescription}>{clasification}</div>
							</div>
						)}
						{content.runtime && (
							<div>
								<div className={style.dataTitle}>Duration</div>
								<div className={style.dataDescription}>
									{Math.trunc(content.runtime / 60)}.{content.runtime % 60} Hour/s
								</div>
							</div>
						)}
						{content.number_of_episodes && content.number_of_seasons && (
							<div>
								<div className={style.dataTitle}>Episodes</div>
								<div className={style.dataDescription}>
									{content.number_of_episodes} ({content.number_of_seasons} Seasons)
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default DataSheet;
