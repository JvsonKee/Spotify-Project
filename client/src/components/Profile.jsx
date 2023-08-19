import NavBar from "./NavBar";
import { useGetUser, useGetFollowing, useGetTopArtists, useGetTopTracks } from "../spotify"

function Profile() {
    const profile = useGetUser();
    const following = useGetFollowing();
    const topArtists = useGetTopArtists();
    const topTracks = useGetTopTracks();


    return (
        <div className="container">
            <NavBar />
            <div className="profile-container">
                <img className="profile-picture" src={profile?.images?.[1]?.url}></img>
                <div className="display-name"> {profile?.display_name} </div>
                <div className="follow-items">
                    <div className="follower-count">{profile?.followers?.total} <span>Followers</span></div>
                    <div className="following-count">{following?.artists?.total} <span>Following</span></div>
                </div>
                <div className="top-items">
                    <div className="top-artists">
                    
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile