
const AUTH_URL = 'http://localhost:8888/login'

function Login() {
    return (
        <div className="login-page">
            <a href={AUTH_URL} className="login-button">Login with Spotify</a>    
        </div>
    )
}

export default Login