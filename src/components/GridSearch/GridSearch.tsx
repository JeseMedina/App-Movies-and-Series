import { moviesOrTvs } from '../../functions';
import { Media } from '../../interfaces/Media';
import Card from '../Card/Card';
import style from './style.module.scss';

function GridSearch({ content }: { content: Media[] }) {
	return (
		<div className={style.grid}>
			{content &&
				content.map((item: Media) => {
					const id = item.id;
					const mediaTypes = item.media_type;
					const url = moviesOrTvs(id, mediaTypes);

					return item.poster_path && <Card key={id} item={item} url={url} />;
				})}
		</div>
	);
}

export default GridSearch;
