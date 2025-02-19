import poster from '../assets/Poster.png'
import '../Styles/Details.css'
function Details() {
    return (
        <>
            <section id="details-container">
                <img id='poster' src={poster} alt="Poster" />
                <div id='details'>
                    <p className="content" id="movie_name"><strong>{"Name"}</strong></p>
                    <ul id="row-content" className="content">
                        <li><strong className="bold_content">Year: </strong>{"Data"}</li>
                        <li><strong className="bold_content">IMDB rating: </strong>{"Data"}</li>
                        <li><strong className="bold_content">Release date:</strong>{"Data"}</li>
                    </ul>
                    <p className="content"><strong className="bold_content">Genre: </strong>{"Data"}</p>
                    <p className="content"><strong className="bold_content">Language: </strong>{"Data"}</p>
                    <p className="content"><strong className="bold_content">Writer: </strong>{"Data"}</p>
                    <p className="content"><strong className="bold_content">Actors: </strong>{"Data"}</p>
                    <p className="content"><strong className="bold_content">Plot: </strong>{"Data"}</p>`
                </div>
            </section>
        </>
    )
}
export default Details;