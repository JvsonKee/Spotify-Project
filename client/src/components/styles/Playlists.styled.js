import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--light-black);
    border-radius: 15px;
    width: 70vw;
    height: 87vh;
    padding: 5vh 5vw;
    gap: 50px;
    overflow: scroll;

    @media screen and (max-width: 820px) {
        width: 100%;
        height: 82vh;
    }
`

export const Header = styled.div`
    font-size: 40px;
    font-weight: 700;
`

export const PlaylistsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
    word-wrap: break-word;
    text-align: center;
`

export const PlaylistCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 210px;
`

export const PlaylistArt = styled.img`
    width: 210px;
    transition: 0.4s ease-in-out;
    &:hover {
        filter: brightness(50%);
    }
`

export const PlaylistInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 15px;
`

export const PlaylistName = styled(Link)`
    color: var(--text-white);
    text-decoration: none;
    transition: 0.4s ease-in-out;
    &:hover {
        color: var(--accent-green);
    }
`

export const TrackTotal = styled.div`
    color: var(--text-grey);
    font-size: 13px;
`