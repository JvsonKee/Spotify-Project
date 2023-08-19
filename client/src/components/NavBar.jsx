import { Link } from "react-router-dom"

function NavBar() {
    return (
        <div className="nav-bar">
            <Link className="nav-item" to="/profile">Profile</Link>
            <Link className="nav-item" to="/playlists">Playlists</Link>
        </div>

    )
}

export default NavBar