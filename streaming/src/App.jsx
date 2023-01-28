import Error404 from './containers/errors/Error404';
import Home from './containers/pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './style.scss';

function App() {

  return (
    <>
     <Router>
       <Routes>

         <Route path="*" element={<Error404 />} />

         <Route path="/home" element={<Home />} />

         {/* <Route path="/blog" element={<Blog />} /> */}

         {/* <Route path="/blog/post/:slug" element={<BlogPost />} /> */}

         {/* <Route path="/blog/categories/:category_id" element={<BlogCategory />} /> */}

         {/* <Route path="/search/:term" element={<Search />} /> */}
       </Routes>
     </Router>
    </>
    
  )
}

export default App
