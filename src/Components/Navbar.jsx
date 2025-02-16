import Searchbar from './Searchbar'
import Logo from '../assets/Icon.png'
import '../Styles/Navbar.css'

function Navbar() {
    return (
        <nav id="navbar">
            <img id='logo' src={Logo} alt="Logo" />
            <Searchbar />
            <div id='navbar-content'>
                <p id='favorites'>Favorites</p>
                <p>Sign in</p>
            </div>

        </nav>
    )
}

export default Navbar;