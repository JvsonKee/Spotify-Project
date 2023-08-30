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

export const PlaylistInformation = styled.div`
    display: flex;
    gap: 40px;
    align-items: center;

    @media screen and (max-width: 700px) {
        align-items: start;
        flex-direction: column;
        
    }
`

export const PlaylistArt = styled.img`
    width: 300px;
    
    @media screen and (max-width: 700px) {
        margin: 0 auto;
        
    }
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