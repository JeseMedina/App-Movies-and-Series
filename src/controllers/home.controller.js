import views from '../views/home.html';
import { calculateProgressBar, onHandleClick, throttle } from '../js/carousel'
const IMG_URL = 'https://image.tmdb.org/t/p/w500'

export default async () => {
  const navigate = (route) => {
    document.location = route;
  }

  const divElement = document.createElement('div');
  divElement.innerHTML = views

  // Trending
  const getTrending = async () => {
    const response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=c4ded25acda802a0e1f075a5f5eab9db&language=es');
    return response.json();
  }

  const trendingElement = divElement.querySelector('#trending');
  const trending = await getTrending();
  trending.results.forEach(movie => {
    let imgSrc = IMG_URL + movie.backdrop_path;
    let type;
    if (movie.media_type === 'movie') {
      type = '#movie/'
    } else {
      type = '#tv/'
    }
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = movie.name;
    img.onclick = () => navigate(`${type}${movie.id}`);
    trendingElement.appendChild(img);
  });

  // Movies
  const getMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=c4ded25acda802a0e1f075a5f5eab9db&language=es');
    return response.json();
  }
  const moviesElement = divElement.querySelector('#movies');
  const movies = await getMovies();
  movies.results.forEach(movie => {
    let imgSrc = IMG_URL + movie.backdrop_path;
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = movie.name;
    img.onclick = () => navigate(`#movie/${movie.id}`);
    moviesElement.appendChild(img);
  })

  // TV
  const getTv = async () => {
    const response = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=c4ded25acda802a0e1f075a5f5eab9db');
    return response.json();
  }
  const tvElement = divElement.querySelector('#tv');
  const tv = await getTv();
  tv.results.forEach(movie => {
    let imgSrc = IMG_URL + movie.backdrop_path;
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = movie.name;
    img.onclick = () => navigate(`#tv/${movie.id}`);
    tvElement.appendChild(img);
  })


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
};
