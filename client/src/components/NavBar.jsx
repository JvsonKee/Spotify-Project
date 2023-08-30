import { Link } from "react-router-dom"
import {
    NavContainer,
    Nav,
    NavItem,
    FAIcon,
    SpotifyIcon
} from "./styles/NavBar.styled"
import { 
    faUser,
    faLinesLeaning,
    faStar,
    faMusic
} from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    return (
        <NavContainer>
            <Nav>
                <Link to="/profile"><SpotifyIcon src="../src/images/Spotify_icon.png"></SpotifyIcon></Link>
                <NavItem to="/profile">
                    <FAIcon icon={faUser} />
                    <span>Profile</span>
                </NavItem>
                <NavItem to="/playlists">
                    <FAIcon icon={faLinesLeaning} />
                    <span>Playlists</span>
                </NavItem>
                <NavItem to="/top-tracks">
                    <FAIcon icon={faMusic} />
                    <span>Top Tracks</span>
                </NavItem>
                <NavItem to="/top-artists">
                    <FAIcon icon={faStar} />
                    <span>Top Artists</span>
                </NavItem>  
            </Nav>
        </NavContainer>

    )
}

export default NavBar