import styled from 'styled-components';

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

    @media screen and (max-width: 820px) {
        width: 100%;
        height: 82vh;
    }
`

export const ArtistContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 25px;

    @media screen and (max-width: 500px) {
        justify-content: space-between;
    }
`

export const ArtistCard = styled.div`
    max-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

export const Index = styled.div`
    color: var(--text-grey);
`

export const ArtistPicture = styled.img`
    width: clamp(150px, 15vw, 200px);
    height: clamp(150px, 15vw, 200px);
    border-radius: 100%;

`

export const ArtistName = styled.div`
    width: 150px;
    text-align: center;
    font-size: 15px;
    word-wrap: break-word;
`