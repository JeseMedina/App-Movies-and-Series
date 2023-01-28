import Error404 from './containers/errors/Error404';
import Home from './containers/pages/Home';
import Movies from './containers/pages/Movies';
import Series from './containers/pages/Series';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './style.scss';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='' element={<Navigate to='/home' />} />
          {/* Error404 */}
          <Route path="*" element={<Error404 />} />
          {/* Home */}
          <Route path="/home" element={<Home />} />
          {/* Movies */}
          <Route path="/movies" element={<Movies />} />
          {/* <Route path="/movies/:movie_id" element={<Movie />} /> */}
          {/* Series */}
          <Route path="/series" element={<Series />} />
          {/* <Route path="/series/:serie_id" element={<Serie />} /> */}
          {/* Search */}
          {/* <Route path="/search/:term" element={<Search />} /> */}
          {/* Watchlist */}
          {/* <Route path="/watchlist" element={<WatchList />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
