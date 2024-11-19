import styled from 'styled-components'
import GlobalStyles from './styles/Global'

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--light-black);
    height: 100vh;
`

const LoginButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--accent-green);
    border-radius: 40px;
    width: 250px;
    height: 75px;
    text-decoration: none;
    color: var(--text-white);
    font-size: large;
    font-weight: 600;
    transition: 0.4s ease-in-out;


    &:hover {
        border-color: var(--accent-green);
        background-color: var(--accent-green);
    }
`

const AUTH_URL = import.meta.env.VITE_AUTH_URL;

function Login() {
    return (
        <LoginContainer>
            <GlobalStyles />
            <LoginButton href={AUTH_URL} className="login-button">Login with Spotify</LoginButton>    
        </LoginContainer>
    )
}

export default Login