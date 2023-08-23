import { Link } from 'react-router-dom'
import NavBar from './NavBar.jsx';
import { useGetPlaylists } from '../spotify/index.js';


function Playlists() {
    const playlists = useGetPlaylists();
    return ( 
        <div className="container">
            <NavBar />  
            <div className="main-content-container">

                { playlists && playlists.items ?
                    <div className="content-container" id="playlists-container">
                        <div className="your-playlists">Your Playlists</div>
                        <div className="playlists">
                            {playlists.items.map((playlist, i) => (
                                <div className="playlist-card" key={i}>
                                    <Link to={"/playlist/" + playlist.id}><img className="playlists-art" src={playlist.images[0].url}></img></Link>
                                    <div className="playlists-information">
                                        <Link to={"/playlist/" + playlist.id} className="playlists-name">{playlist.name}</Link>
                                        <div className="playlists-track-number">{playlist.tracks.total} tracks</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> :
                    <div>Loading...</div>
                }
            </div>
        </div>
       
    )
}

export default Playlists