export function moviesOrTvs(mediaType) {
	if (mediaType === 'movie') {
		return '/movies/';
	} else {
		return '/tvs/';
	}
}

export function movieOrTv(mediaType) {
	if (mediaType === 'movies') {
		return 'movie';
	} else {
		return 'tv';
	}
}

export function getDate(content) {
	if (content.release_date) {
		return content.release_date.split('-')[0];
	} else {
		return content.first_air_date.split('-')[0];
	}
}

export function redirectIfLoggedOut() {
	const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
	if (!isLoggedIn) {
		window.location.href = '/login';
	}
}

export function capitalizeFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
