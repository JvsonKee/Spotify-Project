import { Link } from "react-router-dom"
import {
    NavContainer,
    Nav,
    NavItem,
    FAIcon,
    SpotifyIcon,
    Icon
} from "./styles/NavBar.styled"
import { 
    faUser,
    faLinesLeaning,
} from '@fortawesome/free-solid-svg-icons'
import { 
    IoIosMusicalNotes, 
    IoIosStar
 } from "react-icons/io";
import fullSpotifyLogo from "../assets/Full_Logo_Green_RGB.svg";

function NavBar() {
    return (
        <NavContainer>
            <Nav>
                <Link to="/" className="logo"><SpotifyIcon src={fullSpotifyLogo}/></Link>
                <NavItem to="/">
                    <FAIcon icon={faUser} />
                    <span>Profile</span>
                </NavItem>
                <NavItem to="/playlists">
                    <FAIcon icon={faLinesLeaning} />
                    <span>Playlists</span>
                </NavItem>
                <NavItem to="/top-tracks">
                    <Icon>
                        <IoIosMusicalNotes />
                    </Icon>
                    <span>Top Tracks</span>
                </NavItem>
                <NavItem to="/top-artists">
                    <Icon>
                        <IoIosStar />
                    </Icon>
                    <span>Top Artists</span>
                </NavItem>  
            </Nav>
        </NavContainer>

    )
}

export default NavBar