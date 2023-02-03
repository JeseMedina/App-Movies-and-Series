import { moviesOrTvs } from '../../functions';

function GridSearch({ content }) {
	return (
		<div className="grid">
			{content ? (
				content.map(item => {
					const imgSrc = 'https://image.tmdb.org/t/p/w500' + item.backdrop_path;
					const mediaTypes = item.media_type;
					const id = item.id;
					const url = moviesOrTvs(mediaTypes) + id;

					if (item.backdrop_path != null) {
						return (
							<img
								key={id}
								src={imgSrc}
								alt={item.name || item.title}
								onClick={() => (document.location = url)}
							/>
						);
					}
					return null;
				})
			) : (
				<></>
			)}
		</div>
	);
}

export default GridSearch;
