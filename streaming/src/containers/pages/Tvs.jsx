import Layout from '../Layout'
import Grid from "../../components/Grid/Grid";

function Tvs() {

    return (
        <Layout>
            <Grid name={'Series'} link={'https://api.themoviedb.org/3/tv/popular?api_key=c4ded25acda802a0e1f075a5f5eab9db'} mediaType={'tvs'}/>
        </Layout>
    )
}

export default Tvs;