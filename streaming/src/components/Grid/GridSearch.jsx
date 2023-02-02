import { useEffect, useState } from "react";
import { moviesOrTvs } from "../../functions";

function GridSearch({ content }) {
    // const [content, setContent] = useState([])

    // useEffect(() => {
    //     async function getContent() {
    //         const response = await fetch(link)
    //         const data = await response.json();
    //         setContent(data.results);
    //     }

    //     getContent();
    // }, [])
    return (
        <div className="grid">
            {
                content ?
                content.map((item) => {
                    let imgSrc = 'https://image.tmdb.org/t/p/w500' + item.backdrop_path;
                    let media_type = item.media_type;
                    let id = item.id
                    let url = moviesOrTvs(media_type) + id;


                    if (item.backdrop_path != null) {
                        return (
                            <img
                                key={id}
                                src={imgSrc}
                                alt={item.name || item.title}
                                onClick={() => document.location = url}
                            />
                        )
                    }
                })
                :
                <></>
            }
        </div>
    )
}

export default GridSearch;