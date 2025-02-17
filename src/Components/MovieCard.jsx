import poster from '../assets/Poster.png'
import '../Styles/MovieCard.css'
function MovieCard() {
    return (
        <div className="movie-card">
            <img className='thumbnail' src={poster} alt="Thumbnail" />
            <div className='content-container'>
                <p className='content'>USA, 2016</p>
                <h3 className='content'>Captain America Winter Soldier</h3>
                <p className='content'>IMDB Rating: 8.6</p>
                <p className='genres'>Action,Adventure,Horror</p>
                <div className='fav-container'>
                    <button className='add-to-fav'>Add to favorite</button>
                </div>
            </div>
        </div>
    )
}
export default MovieCard;