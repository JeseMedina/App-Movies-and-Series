import { getDate } from '../../functions';
function DataSheet({ content }) {
	return (
		<>
			<div className="info">
				<div className="synopsis">
					<h2>Sinopsis</h2>
					<p>{content.overview}</p>
				</div>
				<div className="data-sheet">
					<h2>Data Sheet</h2>
					<div className="details">
						<div className="group">
							<div className="data-title">Genre:</div>
							<div className="data-description">
								{content.genres?.map(({ name }) => name).join(', ') || ''}
							</div>
						</div>
						<div className="group">
							<div className="data-title">Release:</div>
							<div className="data-description">{getDate(content)}</div>
						</div>
						<div className="group">
							<div className="data-title">Qualification (TMDB):</div>
							<div className="data-description">{content.vote_average.toFixed(1) + '/10'}</div>
						</div>

						{content.runtime ? (
							<div className="group">
								<div className="data-title"> Duration:</div>
								<div className="data-description">
									{Math.trunc(content.runtime / 60)}.{content.runtime % 60} Hour/s
								</div>
							</div>
						) : (
							<div className="group">
								<div className="data-title"> Episodes:</div>
								<div className="data-description">
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
