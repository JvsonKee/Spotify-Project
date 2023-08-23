import { Link } from "react-router-dom"
import {
    NavContainer,
    Nav,
    NavItem,
    SpotifyIcon
} from "./styles/NavBar.styled"
function NavBar() {
    return (
        <NavContainer>
            <Nav>
                <Link to="/profile"><SpotifyIcon src="../images/Spotify_icon.png"></SpotifyIcon></Link>
                <NavItem to="/profile">Profile</NavItem>
                <NavItem to="/playlists">Playlists</NavItem>
            </Nav>
        </NavContainer>

    )
}

export default NavBar