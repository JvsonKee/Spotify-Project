const clientId = '7aabd726797b45ceb6f79d4500b4cf3d'
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-read-private%20user-follow-read`

function Login() {
    return (
        <div className="login-page">
            <a href={AUTH_URL} className="login-button">Login with Spotify</a>    
        </div>
    )
}

export default Login