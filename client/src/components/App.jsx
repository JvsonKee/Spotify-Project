import Dashboard from "./Dashboard"
import Login from "./Login"

const accessToken = new URLSearchParams(window.location.search).get("access_token");

accessToken ? localStorage.setItem('Access Token', accessToken) : null

export default function App() {
    return accessToken ? <Dashboard /> : <Login />

}

