import { Link } from "react-router-dom"

function NavBar() {
    return (
        <div id="navbar">
            <Link to="/profile">Profile</Link>
            <Link to="/playlists">Playlists</Link>
        </div>

    )
}

export default NavBar