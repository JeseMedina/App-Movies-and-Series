import { Link } from 'react-router-dom';

const Seasons = ({ content }) => {
	return (
		<div className="seasons">
			<h2>Seasons</h2>
			<div className="seasons-grid">
				{content.seasons.map(season => (
					<Link
						to={`/tvs/${content.id}/seasons/${season.season_number}`}
						key={season.id}
						className="season"
					>
						{season.name}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Seasons;
