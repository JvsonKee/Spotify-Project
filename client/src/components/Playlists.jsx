import { Link } from 'react-router-dom'
import NavBar from './NavBar.jsx';
import { usePlaylists } from '../UseCases/useCases';


function Playlists( {code} ) {
    const playlists = usePlaylists(code);
    return ( 
        <div>
            <div id="playlists">
                <div className="your-playlists">Your Playlists</div>
                {playlists?.items?.map((playlist, i) => (
                    <div key={i}>{playlist.name}</div>
                ))}
                {/* {(typeof data.playlists === 'undefined') ? (
                    <div>hello</div>
                ) : (
                    data.playlists.map((playlist, i) => (
                        <div id="playlist" data-id={playlist.id} key = {i}>
                            <Link to={"playlist/" + playlist.id}>
                                <div className="image-container">
                                    <img className='image-style' src={playlist['art'][0]}></img>
                                    <div className="image-title">{ playlist['title'] }</div>
                                </div>
                            </Link>
                        </div>
                    ))
                )} */}
            </div>
        </div>
        
    )
}

export default Playlists