import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 19vw;
    height: 100vh;

    @media screen and (max-width: 820px) {
        width: 100vw;
        height: 8vh;
    }
`

export const Nav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: fixed;
    border-radius: 15px;
    width: 18vw;
    height: 97vh;
    background-color: var(--light-black);

    @media screen and (max-width: 820px) {
        flex-direction: row;
        width: 100%;
        height: 8vh;
        position: fixed;
        border-radius: 0px;
        background-color: var(--dark-black);
    }
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

    @media screen and (max-width: 820px) {
       width: 50px;
    }
`