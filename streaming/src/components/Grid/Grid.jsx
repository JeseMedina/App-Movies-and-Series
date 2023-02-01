import { useEffect, useState } from "react";
import { moviesOrTvs } from "../../functions";

function Grid({ name, link, mediaType }) {
    const [content, setContent] = useState([])

    useEffect(() => {
        async function getContent() {
            const response = await fetch(link)
            const data = await response.json();
            setContent(data.results);
        }

        getContent();
    }, [])

    return (
        <>
            <div className="header">
                <h2 className="title">{name}</h2>
            </div>
            <div className="grid">
                {
                    content.map((item) => {
                        let imgSrc = 'https://image.tmdb.org/t/p/w500' + item.backdrop_path;
                        let media_type = item.media_type;
                            let id = item.id
                            let url;
                            if (mediaType === 'movies') {
                                url = '/movies/' + id;
                            } else if (mediaType === 'tvs') {
                                url = '/tvs/' + id;
                            } else {
                                url = moviesOrTvs(media_type) + id;
                            }

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
                }
            </div>
        </>
    )
}

export default Grid;