import { useEffect, useState } from 'react';

function GridWatchList({ list }) {
	const [content, setContent] = useState([]);

	useEffect(() => {
		async function getContent() {
			const tempArray = [];
			for (const item of list) {
				const response = await fetch(
					`https://api.themoviedb.org/3/${item}?api_key=c4ded25acda802a0e1f075a5f5eab9db`
				);
				const data = await response.json();
				tempArray.push(data);
			}
			setContent(tempArray);
		}
		getContent();
	}, []);

	return (
		<>
			<div className="header">
				<h2 className="title">WatchList</h2>
			</div>
			<div className="grid">
				{content.map(item => {
					const imgSrc = 'https://image.tmdb.org/t/p/w500' + item.backdrop_path;
					const id = item.id;
					let url;
					if (item.first_air_date) {
						url = `tvs/${id}`;
					} else {
						url = `movies/${id}`;
					}

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
				})}
			</div>
		</>
	);
}

export default GridWatchList;
