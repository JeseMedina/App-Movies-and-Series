import { getDate } from "../../functions";
function DataSheet({ content }) {

    return (
        <>
            <div className="info">
                <div className="synopsis">
                    <h3>Sinopsis</h3>
                    <p>{content.overview}</p>
                </div>
                <div className="data-sheet">
                    <h3>Ficha Técnica</h3>
                    <div className="data-title">
                        Genero:
                    </div>
                    <div className="data-description">{content.genres?.map(({ name }) => name).join(', ') || ''}</div>
                    <div className="data-title">
                        Lanzamiento:
                    </div>
                    <div className="data-description">{getDate(content)}</div>
                    <div className="data-title">
                        Calificacion (TMDB):
                    </div>
                    <div className="data-description">{content.vote_average.toFixed(1) + '/10'}</div>
                </div>
            </div>


            {/* <div className="row">
                <div className="header">
                    <h3 className="title">Relacionadas</h3>
                    <div className="progress-bar">
                        <div className="progress-item active"></div>
                        <div className="progress-item"></div>
                        <div className="progress-item"></div>
                        <div className="progress-item"></div>
                    </div>
                </div>
                <div className="carousel">
                    <button className="handle left-handle">
                        <div className="text">&#8249</div>
                    </button>
                    <div className="slider"
                        id="similar">
                    </div>
                    <button className="handle right-handle">
                        <div className="text">&#8250</div>
                    </button>
                </div>
            </div> */}
        </>
    )
}

export default DataSheet