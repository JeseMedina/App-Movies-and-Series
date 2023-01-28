export function movieOrSerie(media_type) {
    if (media_type === 'movie') {
        return '/movies/'
    } else {
        return '/series/'
    }
}