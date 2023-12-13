import Login from "./components/Login"
import Profile from "./pages/Profile/Profile";

const accessToken = new URLSearchParams(window.location.search).get("access_token");

accessToken ? localStorage.setItem('Access Token', accessToken) : null

export default function App() {
    return accessToken ? <Profile /> : <Login />

}

