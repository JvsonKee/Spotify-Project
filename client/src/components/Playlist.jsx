import { useParams } from 'react-router-dom'
import { useGetPlaylist, formatArtists } from '../spotify';
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

function Playlist() {
    const { id } = useParams();
    const playlist = useGetPlaylist(id);
    
    return (
        <div className="container">
            <NavBar />
            <div className="main-content-container">
                { 
                playlist &&
                playlist.tracks ?
                    <div className="content-container" id="playlist-container">
                        <div className="playlist-information">
                            <img className="playlist-art" src={playlist.images[0].url}></img>
                            <div className="playlist-data">
                                <div className="playlist-name">{playlist.name}</div>
                                <div className="playlist-owner">{playlist.owner.display_name}</div>
                                <div className="playlist-total-tracks">{playlist.tracks.total} tracks</div>
                            </div>
                        </div>
                        <div className="tracks">
                            {playlist.tracks.items.map((data, i) => (
                                <Link to={"/track/" + data.track.id} className="track-information" key = {i}>
                                    <div className="index">{i + 1}</div>
                                    <img className="track-art" src={data.track.album.images[0].url}></img>
                                    <div className="track-matrix">
                                        <div className="track-name">{data.track.name}</div>
                                        <div className="track-artists">{formatArtists(data.track.artists)}</div>
                                        <div className="track-album">{data.track.album.name}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div> : 
                    <div>Loading...</div>
                }
            </div>
        </div>
    )
}

export default Playlist

