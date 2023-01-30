import HeaderMovie from '../../components/Header/HeaderMovie'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import Layout from '../Layout'



function Movie() {
    const params = useParams()
    const id = params.movie_id

    const [content, setContent] = useState();

    useEffect(() => {
        async function getContent() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c4ded25acda802a0e1f075a5f5eab9db&language=es`)
            const data = await response.json();
            setContent(data); 
        }
        getContent();
    }, [])

    return (
        <Layout>
            {
                content ? 
                <HeaderMovie title={content.title || content.name} link={id} backdrop={content.backdrop_path}/>
                :
                'cargado'
            }
            
        </Layout>
    )
}

export default Movie