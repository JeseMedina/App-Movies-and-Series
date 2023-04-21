import HeaderContent from '../../../components/HeaderContent';
import DataSheet from '../../../components/DataSheet';
import { useParams } from 'react-router-dom';
import Layout from '../../Layout';
import { useQuery } from 'react-query';
import Cast from '../../../components/Cast';
import Carrousel from '../../../components/Carrousel';
import { BeatLoader } from 'react-spinners';
import Seasons from '../../../components/Seasons';
import { Media } from '../../../interfaces/Media';
import axios from 'axios';
import style from './style.module.scss';
import { redirectIfLoggedOut } from '../../../functions';

function Tv() {
	redirectIfLoggedOut();
	const params = useParams<{ tv_id: string }>();
	const id = params.tv_id;

	const {
		isLoading,
		data: content,
		error,
	} = useQuery<Media>(['movie', id], async () => {
		const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}`, {
			params: {
				api_key: 'c4ded25acda802a0e1f075a5f5eab9db',
				append_to_response: 'credits',
			},
		});
		return response.data;
	});

	if (isLoading) {
		return (
			<Layout>
				<div className={style.load}>
					<BeatLoader color="#fff" />
				</div>
			</Layout>
		);
	}

	if (error) return <></>;

	return (
		<Layout>
			{content && (
				<>
					<HeaderContent content={content} mediaType={'tv'} />
					<main className={style.container}>
						<DataSheet content={content} mediaType={'tv'} />
						<Seasons content={content} />
						<Cast content={content} />
					</main>
					<Carrousel
						name={'Similar'}
						link={`https://api.themoviedb.org/3/tv/${id}/similar`}
						mediaType={'tvs'}
					/>
				</>
			)}
			;
		</Layout>
	);
}

export default Tv;
