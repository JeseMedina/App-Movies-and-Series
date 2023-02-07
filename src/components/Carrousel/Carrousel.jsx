import { useEffect, useState } from 'react';
import { moviesOrTvs } from '../../functions';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carrousel({ name, link, mediaType }) {
	const [content, setContent] = useState([]);

	useEffect(() => {
		async function getContent(link) {
			const response = await fetch(link);
			const data = await response.json();
			setContent(data.results);
		}

		getContent(link);
	}, []);

	const settings = {
		dots: false,
		speed: 500,
		lazyLoad: 'ondemand',
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="row">
			<div className="header">
				<h2 className="title">{name}</h2>
			</div>
			<div className="carrousel">
				<Slider {...settings}>
					{content.map(item => {
						const imgSrc = 'https://image.tmdb.org/t/p/w500' + item.backdrop_path;
						const mediaTypes = item.media_type;
						const id = item.id;
						let url;
						if (mediaType === 'movies') {
							url = '/movies/' + id;
						} else if (mediaType === 'tvs') {
							url = '/tvs/' + id;
						} else {
							url = moviesOrTvs(mediaTypes) + id;
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
				</Slider>
			</div>
		</div>
	);
}

export default Carrousel;
