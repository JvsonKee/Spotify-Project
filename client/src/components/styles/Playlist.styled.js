import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    background-color: var(--light-black);
    border-radius: 15px;
    width: 70vw;
    height: 87vh;
    padding: 5vh 5vw;
    overflow: scroll;
`

export const PlaylistInformation = styled.div`
    display: flex;
    gap: 40px;
    align-items: center;
`

export const PlaylistArt = styled.img`
    width: 300px;
`

export const PlaylistData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 13px;
    color: var(--text-grey);
`

export const PlaylistName = styled.div`
    color: var(--text-white);
    font-size: 40px;
`

export const Tracks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const TrackInformation = styled(Link)`
    display: flex;
    align-items: center;
    height: 90px;
    gap: 15px;
    padding-left: 15px;
    color: var(--text-grey);
    text-decoration: none;
    &:hover {
        background-color: var(--hover);
        border-radius: 10px;
    }
`

export const Index = styled.div`
    color: var(--text-grey);
`

export const TrackArt = styled.img`
    width: 75px;
`

export const TrackName = styled.div`
    color: var(--text-white);
    font-size: 15px;
    text-decoration: none;
`