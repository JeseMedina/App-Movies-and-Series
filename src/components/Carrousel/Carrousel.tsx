import { moviesOrTvs } from '../../functions';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import '../../styles/carrousel.scss';
import style from './style.module.scss';
import { useQuery } from 'react-query';
import { Media } from '../../interfaces/Media';
import Card from '../Card';

const settings: Settings = {
	dots: false,
	speed: 500,
	slidesToShow: 8,
	slidesToScroll: 8,
	initialSlide: 0,
	responsive: [
		{
			breakpoint: 1500,
			settings: {
				slidesToShow: 6,
				slidesToScroll: 6,
			},
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
			},
		},
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			},
		},
		{
			breakpoint: 700,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
	lazyLoad: 'ondemand',
};

function Carrousel({
	name,
	link,
	mediaType,
}: {
	name: string;
	link: string;
	mediaType: string;
}): JSX.Element {
	const { data: content } = useQuery(link, async () => {
		const response = await axios.get(link, {
			params: {
				api_key: 'c4ded25acda802a0e1f075a5f5eab9db',
			},
		});
		return response.data.results;
	});

	return (
		<div className={style.row}>
			<div className={style.header}>
				<h2 className={style.title}>{name}</h2>
			</div>
			<div className={style.carrousel}>
				<Slider {...settings}>
					{content &&
						content.map((item: Media) => {
							const id = item.id;
							const mediaTypes = item.media_type;
							const url = moviesOrTvs(id, mediaTypes, mediaType);
							return item.poster_path && <Card key={id} item={item} url={url} />;
						})}
				</Slider>
			</div>
		</div>
	);
}

export default Carrousel;
