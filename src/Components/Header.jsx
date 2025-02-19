import Poster from '../assets/Poster.png'
import '../Styles/Header.css'
function Header() {
    return (
        <header className="header">
            <img id='poster' src={Poster} alt='poster' />          
        </header>
    )
}
export default Header;