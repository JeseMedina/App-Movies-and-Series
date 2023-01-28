import views from '../views/movie-banner.html';

export default async () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = views

    let id = window.location.hash.split('/')[1]

    const getInfo = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=c4ded25acda802a0e1f075a5f5eab9db&language=es`);
        return response.json();
    }

    const info = await getInfo();

    const cover = divElement.querySelector('.selected-movie');
    let back = `https://www.themoviedb.org/t/p/w1280${info.backdrop_path}`;
    let poster = `https://www.themoviedb.org/t/p/w1280${info.poster_path}`;
    if (back != null){
        cover.style.background = `url(${back}) no-repeat center `;
    }else {
        cover.style.background = `url(${poster}) no-repeat center `;
    }

    cover.style.backgroundSize = "cover"

    const title = divElement.querySelector('#title');
    title.innerHTML = info.name;

    return divElement;
};
