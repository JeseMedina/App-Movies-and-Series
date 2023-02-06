import { getDate } from '../../functions';
function DataSheet({ content }) {
	return (
		<>
			<div className="info">
				<div className="synopsis">
					<h3>Sinopsis</h3>
					<p>{content.overview}</p>
				</div>
				<div className="data-sheet">
					<h3>Data Sheet</h3>
					<div className="data-title">Genre:</div>
					<div className="data-description">
						{content.genres?.map(({ name }) => name).join(', ') || ''}
					</div>
					<div className="data-title">Release:</div>
					<div className="data-description">{getDate(content)}</div>
					<div className="data-title">Qualification (TMDB):</div>
					<div className="data-description">{content.vote_average.toFixed(1) + '/10'}</div>
				</div>
			</div>
		</>
	);
}

export default DataSheet;
