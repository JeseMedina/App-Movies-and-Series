import { Media, Cast as CastI } from '../../interfaces/Media';
import style from './style.module.scss';
import Slider, { Settings } from 'react-slick';
import CardCast from '../CardCast';

const settings: Settings = {
	dots: false,
	speed: 500,
	slidesToShow: 8,
	slidesToScroll: 8,
	initialSlide: 0,
	arrows: true,
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
				arrows: false,
			},
		},
	],
	lazyLoad: 'ondemand',
};

function Cast({ content }: { content: Media }): JSX.Element {
	const cast = content.credits?.cast;

	return (
		<>
			<div className={style.row}>
				<div className={style.header}>
					<h2 className={style.title}>Cast</h2>
				</div>
				<div className={style.carrousel}>
					<Slider {...settings}>
						{cast &&
							cast.map((item: CastI) => {
								const id = item.id;
								return item.profile_path && <CardCast key={id} item={item} />;
							})}
					</Slider>
				</div>
			</div>
		</>
	);
}

export default Cast;
