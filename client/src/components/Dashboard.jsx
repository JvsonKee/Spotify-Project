import NavBar from "./NavBar";
import Profile from "./Profile";
import Playlists from "./Playlists";

function Dashboard( {code}) {

    console.log({code})
    return (
        <div>
            <NavBar />
            <Profile code={code} />
            <Playlists code={code} />
        </div>
    );

}

export default Dashboard