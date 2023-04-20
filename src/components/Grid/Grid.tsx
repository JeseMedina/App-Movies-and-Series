import { moviesOrTvs } from '../../functions';
import { Media } from '../../interfaces/Media';
import Card from '../Card/Card';
import style from './style.module.scss';

function Grid({ name, content, mediaType }: { name: string; content: Media[]; mediaType: string }) {
	return (
		<>
			<div className={style.header}>
				<h2 className={style.title}>{name}</h2>
			</div>
			<div className={style.grid}>
				{content.map((item: Media) => {
					const id = item.id;
					const mediaTypes = item.media_type;
					const url = moviesOrTvs(id, mediaTypes, mediaType);
					return item.poster_path && <Card key={item.id} item={item} url={url} />;
				})}
			</div>
		</>
	);
}

export default Grid;
