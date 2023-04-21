import { Media } from './interfaces/Media';
import { useNavigate } from 'react-router-dom';

function moviesOrTvsWithoutType(mediaType: string): string {
	if (mediaType === 'movie') {
		return '/movies/';
	} else {
		return '/tvs/';
	}
}

export function moviesOrTvsWatchlist(item: Media, id: number): string {
	if (item.name) {
		return '/tvs/' + id;
	} else {
		return '/movies/' + id;
	}
}

export function moviesOrTvs(id: number, mediaTypes: string, type?: string): string {
	if (type && type === 'movies') {
		return '/movies/' + id;
	} else if (type && type === 'tvs') {
		return '/tvs/' + id;
	} else {
		return moviesOrTvsWithoutType(mediaTypes) + id;
	}
}

export function getDate(content: Media): string | undefined {
	const date = content.first_air_date || content.release_date;
	return date?.split('-')[0];
}

export function redirectIfLoggedOut(): boolean {
	const navigate = useNavigate();
	const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
	if (isLoggedIn === false) {
		navigate('/login');
		return false;
	}
	return true;
}

export function capitalizeFirstLetter(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getRandomInt(max: number): number {
	return Math.floor(Math.random() * max);
}
