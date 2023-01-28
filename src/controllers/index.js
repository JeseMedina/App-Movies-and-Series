import Home from './home.controller'
import HomeBanner from './home-banner.controller'
import Movie from './movie-controller'
import MovieBanner from './movie-banner.controller'
import Tv from './tv.controller'
import TvBanner from './tv-banner.controller'

const pages = {
    home : Home,
    homeBanner : HomeBanner ,
    movie : Movie, 
    movieBanner : MovieBanner,
    tv : Tv,
    tvBanner: TvBanner
}

export {pages};