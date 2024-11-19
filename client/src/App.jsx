import { useEffect, useState } from "react";
import Login from "./components/Login"
import Profile from "./pages/Profile/Profile";
import { getAccessToken } from "./spotify";

export default function App() {
    const [accessToken, setAccessToken] = useState();

    useEffect(() => {
        const localToken = sessionStorage.getItem('access_token');
        !localToken || localToken == 'null' ? setAccessToken(getAccessToken()) : setAccessToken(localToken);
    }, [accessToken])

    return accessToken ? <Profile /> : <Login />
}