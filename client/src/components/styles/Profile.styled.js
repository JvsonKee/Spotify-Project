import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
    background-color: var(--light-black);
    border-radius: 15px;
    width: 70vw;
    height: 87vh;
    padding: 5vh 5vw;
    overflow: scroll;

    @media screen and (max-width: 820px) {
        justify-content: space-between;
        width: 100%;
        padding: 5vh 10vw;
        gap: 50px;
        height: 82vh;
    }
`

export const ProfileInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`

export const ProfilePicture = styled.img`
    width: 200px;
    border-radius: 100%;
`

export const DisplayName = styled.div`
    font-size: 40px;
    font-weight: 700;
`

export const FollowItems = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 500px;
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
    }
`

export const TopCategory = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
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
`

export const TrackName = styled.div`
    color: var(--text-white);
    font-size: 14px;
`

export const TrackAlbumArtists = styled.div`
    font-size: 12px
`

export const ArtistPicture = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 100%;
`