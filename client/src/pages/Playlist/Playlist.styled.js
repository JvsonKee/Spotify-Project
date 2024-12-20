import styled from 'styled-components';

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
    aspect-ratio: 1 / 1;
    border-radius: 4px;
    
    @media screen and (max-width: 700px) {
        margin: 0 auto;
    }

    @media screen and (max-width: 500px) {
        border-radius: 2px;
    }
`

export const PlaylistData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 13px;
    color: var(--text-grey);

    @media screen and (max-width: 700px) {
        margin: 0 auto;
    }
`

export const PlaylistName = styled.div`
    color: var(--text-white);
    font-size: 40px;
`

export const PlaylistLink = styled.a`
    color: var(--text-white);
`