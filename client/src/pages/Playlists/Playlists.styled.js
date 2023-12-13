import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.div`
    font-size: 40px;
    font-weight: 700;
`

export const PlaylistsContainer = styled.div`
    display: flex;
    flex-direction: row;    
    flex-wrap: wrap;
    gap: 1%;
    word-wrap: break-word;
    text-align: center;

    @media screen and (max-width: 500px) {
        flex-direction: column;
        gap: 10px;
    }
`

export const PlaylistCard = styled(Link)`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 19%;
    margin-bottom: 15px;
    text-decoration: none;
    cursor: default;

    @media screen and (max-width: 1500px) {
        width: 24%;
    }

    @media screen and (max-width: 1200px) {
        width: 32%;
    }

    @media screen and (max-width: 630px) {
        width: 49%;
    }

    @media screen and (max-width: 500px) {
        flex-direction: row;
        align-items: center;
        gap: 10px;
        width: 100%;
        height: 110px;
        padding-left: 10px;
        margin-bottom: 0;
        text-align: left;
        cursor: pointer;

        &:hover {
            background-color: var(--hover);
            border-radius: 10px;
        }
    }
`

export const PlaylistArt = styled.img`
    width: 100%;
    transition: 0.4s ease-in-out;

    &:hover {
        cursor: pointer;
        filter: brightness(50%);
    }

    @media screen and (max-width: 500px) {
        width: 90px;

        &:hover {
            filter: brightness(100%);
        }
    }
`

export const PlaylistInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
`

export const PlaylistName = styled.div`
    color: var(--text-white);
    text-decoration: none;
    transition: 0.4s ease-in-out;

    @media screen and (min-width: 500px) {
        &:hover {
            cursor: pointer;
            color: var(--accent-green);
        }
    } 

    @media screen and (max-width: 500px) {
        font-size: 15px;
    }
`

export const TrackTotal = styled.div`
    color: var(--text-grey);
    font-size: 12px;
`