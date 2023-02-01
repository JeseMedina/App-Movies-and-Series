export function moviesOrTvs(media_type) {
    if (media_type === 'movie') {
        return '/movies/'
    } else {
        return '/tvs/'
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
        return content.release_date.split('-')[0]
    } else {
        return content.first_air_date.split('-')[0]
    }
}