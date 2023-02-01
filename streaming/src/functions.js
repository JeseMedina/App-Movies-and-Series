export function movieOrTv(media_type) {
    if (media_type === 'movie') {
        return '/movies/'
    } else {
        return '/tvs/'
    }
}