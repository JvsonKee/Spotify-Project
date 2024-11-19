import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MainContent } from '../../components/styles/MainContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Main = styled(MainContent)`
    @media screen and (max-width: 820px) {
        gap: 50px;
    }
`

export const ProfileInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`

export const ProfilePicture = styled.img`
    width: 220px;
    aspect-ratio: 1 / 1;
    border-radius: 4px;

    @media screen and (max-width: 500px) {
        border-radius: 2px;
    }
    /* border-radius: 100%; */
`

export const PlaceholderPicture = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    border-radius: 4px;
    background-color: var(--hover);

    @media screen and (max-width: 500px) {
        border-radius: 2px;
    }
`

export const FaIcon = styled(FontAwesomeIcon)`
    font-size: 50px;
    color: var(--text-grey);
`

export const DisplayName = styled.div`
    font-size: 40px;
    font-weight: 700;
`

export const FollowItems = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    word-spacing: 5px;
    color: var(--accent-green);

    & span {
        color: var(--text-grey);
    }
`
export const TopItems = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
    width: 100%;
    
    @media screen and (max-width: 700px) {
        flex-direction: column;
        margin: 0 auto;
        gap: 50px;
    }
`

export const TopCategory = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`

export const TopHeader = styled(Link)`
    text-decoration: none;
    color: var(--text-white);
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 5px;
    width: 100px;
    transition: 0.3s ease-in-out;

    &:hover {
        color: var(--accent-green);
    }
`

export const Index = styled.div`
    color: var(--text-grey);
`

export const TrackCard = styled(Link)`
    display: flex;
    gap: 10px;
    align-items: center;
    height: 80px;
    padding-left: 15px;
    font-size: 14px;
    text-decoration: none;
    border-radius: 10px;
    transition: 0.4s ease-in-out;

    &:hover {
        background-color: var(--hover);
    }   
`

export const ArtistCard = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    height: 80px;
    padding-left: 15px;
    font-size: 14px;
`

export const TrackArt = styled.img`
    width: 60px;
    border-radius: 2px;
`

export const TrackName = styled.div`
    color: var(--text-white);
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const TrackAlbumArtists = styled.div`
    font-size: 12px;
`

export const ArtistPicture = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 2px;
    /* border-radius: 100%; */
`

export const LogoutContainer = styled.div`
    display: flex;  
    align-items: center;
    justify-content: center;

`

export const LogoutButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 35px;
    border: 2px solid var(--text-white);
    border-radius: 50px;
    font-size: 14px;

    &:hover {
        transition: 0.3s ease-in-out;
        cursor: pointer;    
        background-color: var(--text-white);
        color: var(--light-black);
    }
`