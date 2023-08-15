import Dashboard from "./components/Dashboard"
import Login from "./components/Login"

const code = new URLSearchParams(window.location.search).get("code");

// localStorage.setItem("token", token);

export default function App() {
    return code ? <Dashboard code={code} /> : <Login />
}

