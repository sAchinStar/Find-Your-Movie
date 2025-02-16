import Poster from '../assets/Poster.png'
import '../Styles/Header.css'
import Navbar from './Navbar';
function Header() {
    return (
        <header className="header">
            <img id='poster' src={Poster} alt='poster' />
            <Navbar/>
            
        </header>
    )
}
export default Header;