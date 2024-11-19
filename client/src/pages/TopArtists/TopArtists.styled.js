import styled from 'styled-components';

export const ArtistContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    @media screen and (max-width: 500px) {
        /* flex-direction: column; */
    }
`

export const ArtistCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: calc((100% / 4) - 15px);

    @media screen and (max-width: 820px) {
        width: calc((100% / 3) - (40px / 3));
    }

    @media screen and (max-width: 500px) {
        width: calc((100% / 2) - 10px);
    }
`

export const Index = styled.div`
    color: var(--text-grey);
`

export const ArtistPicture = styled.img`
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 4px;

    @media screen and (max-width: 500px) {
        border-radius: 2px;
    }
    /* border-radius: 100%; */
`

export const ArtistName = styled.div`
    display: flex;
    align-items: center;
    height: 10%;
    font-size: clamp(12px, 3vw, 16px);
    word-wrap: break-word;
`