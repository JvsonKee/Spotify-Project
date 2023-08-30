import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TracksContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const TrackCard = styled(Link)`
    display: flex;
    gap: 10px;
    align-items: center;
    height: 90px;
    font-size: 14px;
    text-decoration: none;
    border-radius: 10px;
    transition: 0.4s ease-in-out;

    &:hover {
        background-color: var(--hover);
    }   
`

export const Index = styled.div`
    width: 20px;
    text-align: right;
    color: var(--text-grey);
`

export const TrackArt = styled.img`
    width: 75px;
    height: 75px;
`

export const TrackName = styled.div`
    color: var(--text-white);
    font-size: clamp(15px, 3vw, 16px);
`

export const TrackArtists = styled.div`
    font-size: 12px;
`

export const TrackAlbum = styled.div`
    font-size: 12px;
`