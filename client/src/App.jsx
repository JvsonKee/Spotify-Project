import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import '../src/styles/reset.css'
import '../src/styles/index.css'


const accessToken = new URLSearchParams(window.location.search).get("access_token");
console.log({accessToken});


export default function App() {
    return accessToken ? <Dashboard /> : <Login />
}

