import { useProfile } from "../UseCases/useCases";


function Profile( {code} ) {
    const profile = useProfile(code);
    return (
        <div className="profile-container">
            <div className="display-name"> {profile?.display_name} </div>
            <div className="follower-count"> Followers {profile?.followers?.total} </div>
            <img className="profile-picture" src={profile?.images?.[1]?.url}></img>
        </div>
    )
}

export default Profile