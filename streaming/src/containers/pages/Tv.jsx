import HeaderContent from '../../components/Header/HeaderContent'
import DataSheet from '../../components/DataSheet/DataSheet'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import Layout from '../Layout'
import Cast from '../../components/DataSheet/Cast';
import Carrousel from '../../components/Carrousel/Carrousel'

function Tv() {
    const params = useParams()
    const id = params.tv_id

    const [content, setContent] = useState();

    useEffect(() => {
        async function getContent() {
            const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=c4ded25acda802a0e1f075a5f5eab9db&language=es`)
            const data = await response.json();
            setContent(data);
        }
        getContent();
    }, [])

    return (
        <Layout>
            {
                content ?
                    <>
                        <HeaderContent content={content} />

                        <Carrousel name={'Similar'} link={`https://api.themoviedb.org/3/tv/${id}/similar?api_key=c4ded25acda802a0e1f075a5f5eab9db&language=es`} mediaType={'tvs'} />
                    </>
                    :
                    'cargado'
            }

        </Layout>
    )
}

export default Tv

const xd = `
<main className="container">
                            <DataSheet content={content} />
                            <Cast content={content} mediaType={'tv'}/>
                        </main>`