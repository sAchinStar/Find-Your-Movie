import Poster from '../assets/Poster.png'
import '../Styles/Header.css'
import Navbar from './Navbar';
function Header() {
    return (
        <header className="header">
            <Navbar/>
            <img id='poster' src={Poster} alt='poster' />
            
        </header>
    )
}
export default Header;