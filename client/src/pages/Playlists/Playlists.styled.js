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
    gap: 10px;
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
    width: calc((100% / 4) - (30px / 4));
    margin-bottom: 15px;
    text-decoration: none;
    transition: 300ms ease-in-out;
    cursor: default;

    &:hover {
        transform: translateY(-4px);
    }

    @media screen and (max-width: 830px) {
        width: calc((100% / 3) - (20px / 3));
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
    aspect-ratio: 1 / 1;
    border-radius: 4px;
    transition: 0.4s ease-in-out;

    &:hover {
        cursor: pointer;
        /* filter: brightness(50%); */
    }

    @media screen and (max-width: 500px) {
        width: 90px;
        border-radius: 2px;

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