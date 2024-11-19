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

export const Icon = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
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

        .logo {
            display: none;
        }
    }

    & a.active ${FAIcon} {
        color: var(--accent-green);
    }

    & a.active ${Icon} {
        color: var(--accent-green);
    }

    & a.active {
        color: var(--text-white);
    }
`

export const NavItem = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 20px;
    width: 60%;
    height: 5%;
    color: var(--text-grey);
    text-decoration: none;
    font-size: 16px;

    & span, ${FAIcon}, ${Icon} {
        transition: 0.3s ease-in-out;
    }
    &:hover span {
        color: var(--text-white);
    }
    &:hover ${FAIcon} {
        color: var(--accent-green);
    }
    &:hover ${Icon} {
        color: var(--accent-green);
    }

    @media screen and (max-width: 820px) {
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        font-size: 14px;
    }
`

export const SpotifyIcon = styled.img`
    width: 150px;

    @media screen and (max-width: 820px) {
       width: 50px;
    }
`