import poster from '../assets/Poster.png'
function MovieCard(){
    return(
        <div className="movie-card">
            <div>
                <img src={poster} alt="Thumbnail" />
            </div>
            <p>Captain America Winter Soldier</p>
            <p>IMDB Rating: 8.6</p>
        </div>
    )
}
export default MovieCard;