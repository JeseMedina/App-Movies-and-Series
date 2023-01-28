import views from '../views/home-banner.html';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export default async () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = views

    const getTrending = async () => {
        const response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=c4ded25acda802a0e1f075a5f5eab9db&language=es');
        return response.json();
    }

    const trending = await getTrending();
    const info = trending.results[getRandomInt(19)]

    const cover = divElement.querySelector('.main-movie');
    const poster = `https://www.themoviedb.org/t/p/w1280${info.backdrop_path}`;
    cover.style.background = `url(${poster}) no-repeat center `;
    cover.style.backgroundSize = "cover"

    const title = divElement.querySelector('#title');
    title.innerHTML = info.name || info.title;

    const description = divElement.querySelector('#description');
    description.innerHTML = info.overview;

    const moreInfo = divElement.querySelector('#more-info');
    let type;
    if (info.media_type === 'movie') {
      type = '/#movie/'
    } else {
      type = '/#tv/'
    }
    moreInfo.setAttribute('onclick', `document.location='${type}${info.id}'`)


    return divElement;
};
