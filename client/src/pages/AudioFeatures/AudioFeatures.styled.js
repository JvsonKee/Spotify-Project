import styled from 'styled-components'

export const TrackInformation = styled.div`
    display: flex;
    gap: 30px;

    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`

export const TrackArt = styled.img`
    width: clamp(250px, 20vw, 350px);
    border-radius: 4px;

    @media screen and (max-width: 700px) {
        margin: 0 auto;
    }

    @media screen and (max-width: 500px) {
        border-radius: 2px;
    }
`

export const FeaturesInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;

    @media screen and (max-width: 700px) {
        gap: 30px;
    }
`

export const TrackData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 13px;
    color: var(--text-grey);
`

export const TrackName = styled.div`
    color: var(--text-white);
    font-size: clamp(30px, 4vw, 40px);
`

export const TrackAnalysis = styled.div`
    display: flex;
    width: 100%;
    height: 90px;
    justify-content: space-between;
    align-items: center;
    color: var(--text-grey);
    text-align: center;
    font-size: 11px;
`

export const TrackLink = styled.a`
    color: var(--text-white);
`

export const AlbumLink = styled.a`
    color: var(--text-grey);
    transition: 0.3s ease-in-out;
    &:hover {
        color: var(--text-white);
    }
`

export const AnalysisWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 7px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    width: 90%;
    height: 100%;
`

export const FeatureItem = styled.div`
    color: var(--text-white);
    font-weight: 700;
    font-size: clamp(12px, 2vw, 18px);
`

export const ChartContainer = styled.div`
    display: flex;
    justify-content: center;
`