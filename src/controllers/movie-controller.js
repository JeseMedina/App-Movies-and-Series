import views from '../views/movie.html'
import { calculateProgressBar, onHandleClick, throttle } from '../js/carousel'
const IMG_URL = 'https://image.tmdb.org/t/p/w500'

export default async () => {
    let divElement = '';
    divElement = document.createElement('div');
    divElement.innerHTML = views

    let id = window.location.hash.split('/')[1]

    const getInfo = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c4ded25acda802a0e1f075a5f5eab9db&language=es`);
        return response.json();
    }

    const info = await getInfo();

    const synopsis = divElement.querySelector('#synopsis');
    const genre = divElement.querySelector('#genre');
    const year = divElement.querySelector('#year');
    const qualification = divElement.querySelector('#qualification');

    synopsis.innerHTML = info.overview;
    year.innerHTML = info.release_date.split('-')[0];
    qualification.innerHTML = info.vote_average + "/10";

    genre.innerHTML += info.genres?.map(({ name })=> name).join(', ') || '';

    const getCredit = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c4ded25acda802a0e1f075a5f5eab9db&language=es`);
        return response.json();
    }

    const castElement = divElement.querySelector('#cast');
    const credits = await getCredit();

    const castLength = Math.min(12, credits.cast.length);

    for (let i = 0; i < castLength; i++) {
        let img;
        if (credits.cast[i].profile_path === null) {
            img = 'https://d3jh33bzyw1wep.cloudfront.net/s3/W1siZiIsImNvbXBpbGVkX3RoZW1lX2Fzc2V0cy9FTElHTyBSRUNSVUlUTUVOVC9wbmcvdXNlci1wcm9maWxlLWRlZmF1bHQucG5nIl1d';
        } else {
            img = IMG_URL + credits.cast[i].profile_path;
        }


        castElement.innerHTML += `
        <div class="card">
            <img src="${img}" alt="${credits.cast[i].name}">
            <div class="card-container">
                <p class="actor">${credits.cast[i].name}</p>
                <p class="character">${credits.cast[i].character}</p>
            </div>
        </div>
        `
    }



    // const getSimilar = async () => {
    //     const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=c4ded25acda802a0e1f075a5f5eab9db&language=es`);
    //     return response.json();
    // }

    // const similarElement = divElement.querySelector('#similar');
    // const similar = await getSimilar();
    // console.log(similar)
    // similar.results.forEach(movie => {
    //     let img = IMG_URL + movie.backdrop_path;
    //     similarElement.innerHTML += `
    //     <img src="${img}" onclick="document.location=this.id+'${type}${movie.id}'" alt="${movie.name}">
    //     `
    // });

    document.addEventListener("click", e => {
        let handle
        if (e.target.matches(".handle")) {
            handle = e.target
        } else {
            handle = e.target.closest(".handle")
        }
        if (handle != null) onHandleClick(handle)
    })

    const throttleProgressBar = throttle(() => {
        document.querySelectorAll(".progress-bar").forEach(calculateProgressBar)
    }, 250)

    window.addEventListener("resize", throttleProgressBar)

    document.querySelectorAll(".progress-bar").forEach(calculateProgressBar)

    return divElement;
}
