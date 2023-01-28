import Layout from '../Layout'
import Header from '../../components/Header/Header'
import Carrousel from '../../components/Carrousel/Carrousel'

function Home() {
    return (
        <Layout>
            <Header />
            <Carrousel name="Trending" link="https://api.themoviedb.org/3/trending/all/day?api_key=c4ded25acda802a0e1f075a5f5eab9db&language=es" mediaType={''} />
            <Carrousel name="Movies" link="https://api.themoviedb.org/3/movie/popular?api_key=c4ded25acda802a0e1f075a5f5eab9db&language=es" mediaType={'movies'} />
            <Carrousel name="Series" link="https://api.themoviedb.org/3/tv/popular?api_key=c4ded25acda802a0e1f075a5f5eab9db" mediaType={'series'} />
        </Layout>
    )
}

export default Home