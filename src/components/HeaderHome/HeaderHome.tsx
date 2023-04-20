import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faPlay } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import style from './style.module.scss';
import { Media } from '../../interfaces/Media';
import { useQuery } from 'react-query';
import { getRandomInt, moviesOrTvs } from '../../functions';
import { BeatLoader } from 'react-spinners';

function HeaderHome(): JSX.Element {
	const {
		isLoading,
		data: content,
		error,
	} = useQuery<Media>(['header'], async () => {
		const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day`, {
			params: {
				api_key: 'c4ded25acda802a0e1f075a5f5eab9db',
			},
		});
		return response.data.results[getRandomInt(19)];
	});

	if (isLoading) {
		return (
			<div className={style.load}>
				<BeatLoader color="#fff" />
			</div>
		);
	}

	if (error) return <></>;

	return content ? (
		<div
			className={style.mainMovie}
			style={{
				backgroundImage: `url(https://www.themoviedb.org/t/p/w1280${content.backdrop_path})`,
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}
		>
			<div className={style.container}>
				<h1 className={style.title}>{content.name || content.title}</h1>
				<p className={style.description}>{content.overview}</p>
				<div className={style.buttons}>
					<button className={style.button}>
						<FontAwesomeIcon icon={faPlay} /> Play
					</button>
					<Link to={moviesOrTvs(content.id, content.media_type)} className={style.button}>
						<FontAwesomeIcon icon={faInfoCircle} /> More Info.
					</Link>
				</div>
			</div>
		</div>
	) : (
		<></>
	);
}

export default HeaderHome;
