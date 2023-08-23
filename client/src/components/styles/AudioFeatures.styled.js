import styled from 'styled-components'

export const MainContent = styled.div`
    background-color: var(--light-black);
    border-radius: 15px;
    width: 70vw;
    height: 87vh;
    padding: 5vh 5vw;
    display: flex;
    flex-direction: column;
    gap: 50px;
    overflow: scroll;

    @media screen and (max-width: 820px) {
        width: 100%;
        height: 82vh;
    }
`

export const TrackInformation = styled.div`
    display: flex;
    gap: 30px;

    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`

export const TrackArt = styled.img`
    width: clamp(250px, 20vw, 350px);

    @media screen and (max-width: 700px) {
        margin: 0 auto;
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
    font-size: 40px;
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
    font-size: clamp(12px, 3vw, 20px);


`

export const ChartContainer = styled.div`
    display: flex;
    justify-content: center;
`