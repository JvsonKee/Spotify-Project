import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 19vw;
    height: 100vh;
`

export const Nav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    border-radius: 15px;
    width: 18vw;
    height: 97vh;
    background-color: var(--light-black);
`

export const NavItem = styled(Link)`
    color: var(--text-grey);
    text-decoration: none;
    transition: 0.3s ease-in-out;
    &:hover {
        color: var(--text-white);
    }
`

export const SpotifyIcon = styled.img`
    width: 70px;
`