import { Link } from "react-router-dom"

function NavBar() {
    return (
        <div className="nav-container">
            <div className="nav-bar">
                <Link to="/profile"><img className="spotify-icon" src="../images/Spotify_icon.png"></img></Link>
                <Link className="nav-item" to="/profile">Profile</Link>
                <Link className="nav-item" to="/playlists">Playlists</Link>
            </div>
        </div>

    )
}

export default NavBar