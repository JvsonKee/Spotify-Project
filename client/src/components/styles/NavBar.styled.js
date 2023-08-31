import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 19vw;
    height: 100vh;

    @media screen and (max-width: 820px) {
        width: 100%;
        height: 8vh;
    }
`

export const FAIcon = styled(FontAwesomeIcon)`
    font-size: 17px;
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
    font-size: 13px;

    @media screen and (max-width: 820px) {
        flex-direction: row;
        width: 100%;
        height: 8vh;
        position: fixed;
        border-radius: 0px;
        background-color: var(--dark-black);
    }

    & a.active ${FAIcon} {
        color: var(--accent-green);
    }

    & a.active {
        color: var(--text-white);
    }
`

export const NavItem = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 5%;
    color: var(--text-grey);
    text-decoration: none;

    & span, ${FAIcon} {
        transition: 0.3s ease-in-out;
    }
    &:hover span {
        color: var(--text-white);
    }
    &:hover ${FAIcon} {
        color: var(--accent-green);
    }
`

export const SpotifyIcon = styled.img`
    width: 70px;

    @media screen and (max-width: 820px) {
       width: 50px;
    }
`