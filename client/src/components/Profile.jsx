import NavBar from "./NavBar";
import { Link } from 'react-router-dom'
import { 
    useGetUser, 
    useGetFollowing, 
    useGetTopArtists,
    useGetTopTracks, 
    formatArtists 
} from "../spotify"

function Profile() {
    const profile = useGetUser();
    const following = useGetFollowing();
    const topArtists = useGetTopArtists();
    const topTracks = useGetTopTracks();


    return (
        <div className="container">
            <NavBar />
            <div className="main-content-container">
                { 
                profile && 
                following && 
                topArtists &&
                topTracks &&
                topArtists.items &&
                topTracks.items ? 
                    <div className="content-container" id="profile-container">
                        <div className="profile-information">
                            <img className="profile-picture" src={profile.images[1].url}></img>
                            <div className="display-name"> {profile.display_name} </div>
                            <div className="follow-items">
                                <div className="follower-count">{profile.followers.total} <span>Followers</span></div>
                                <div className="following-count">{following.artists.total} <span>Following</span></div>
                            </div>
                        </div>
                        <div className="top-items">
                            <div className="top-tracks">
                                <div className="top-header">Top Tracks</div>
                                {topTracks.items.slice(0, 5).map((track, i) => (
                                    <Link to={"/track/" + track.id} className="track-card" key={i}>
                                        <div className="index">{i + 1}</div>
                                        <img className="profile-track-art" src={track.album.images[0].url}></img>
                                        <div className="track-matrix">
                                            <div className="profile-track-name">{track.name}</div>
                                            <div className="profile-track-artists-album">{formatArtists(track.artists)} • {track.album.name}</div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className="top-artists">
                                <div className="top-header">Top Artists</div>
                                {topArtists.items.slice(0, 5).map((artist, i) => (
                                    <div className="artist-card" key={i}>
                                        <div className ="index">{i + 1}</div>
                                        <img className="profile-artist-art" src={artist.images[0].url}></img>
                                        <div className="profile-artist-name">{artist.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div> : 
                    <div>Loading</div>
                }
            </div>
        </div>
    )
}

export default Profile