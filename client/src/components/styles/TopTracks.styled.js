import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
    background-color: var(--light-black);
    border-radius: 15px;
    width: 70vw;
    height: 87vh;
    padding: 5vh 5vw;
    overflow: scroll;
`

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 75px;
`

export const Header = styled.div`
    font-size: 40px;
    font-weight: 700;
`

export const TrackCard = styled(Link)`
    display: flex;
    gap: 10px;
    align-items: center;
    height: 80px;
    font-size: 14px;
    text-decoration: none;
    border-radius: 10px;
    transition: 0.4s ease-in-out;
    &:hover {
        background-color: var(--hover);
    }   
`

export const TracksContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Index = styled.div`
    width: 20px;
    text-align: right;
    color: var(--text-grey);
`

export const TrackArt = styled.img`
    width: 60px;
    height: 60px;
`

export const TrackName = styled.div`
    color: var(--text-white);
    font-size: 14px;
`

export const TrackAlbumArtists = styled.div`
    font-size: 12px;
`