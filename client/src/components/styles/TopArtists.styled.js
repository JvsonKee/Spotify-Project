import styled from 'styled-components';

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    background-color: var(--light-black);
    border-radius: 15px;
    width: 70vw;
    height: 87vh;
    padding: 5vh 5vw;
    overflow: scroll;
`

export const ArtistContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 60px;
`

export const ArtistCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`

export const Index = styled.div`
    color: var(--text-grey);
`

export const ArtistPicture = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 100%;
`

export const ArtistName = styled.div`
    font-size: 15px;
`