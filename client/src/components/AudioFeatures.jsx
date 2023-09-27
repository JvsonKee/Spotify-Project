import AudioChart from './AudioChart'
import NavBar from "./NavBar";
import { 
    useGetTrack, 
    useGetAudioFeatures, 
    formatArtists,
    formatYear, 
    formatDuration, 
    formatKey, 
    formatMode,
    getAudioFeaturesData,
    createFeatureArray
} from '../spotify';
import { useParams } from 'react-router-dom';
import LoadingPage from './LoadingPage';
import GlobalStyles from './styles/Global';
import { Container } from './styles/Container';
import { ContentContainer } from './styles/ContentContainer';
import { MainContent } from './styles/MainContent';
import { 
    TrackInformation,
    TrackArt,
    FeaturesInformation,
    TrackData,
    TrackName,
    TrackAnalysis,
    AnalysisWrapper,
    FeatureItem,
    ChartContainer
} from './styles/AudioFeatures.styled';


function AudioFeatures() {

    const { id } = useParams()
    const track = useGetTrack(id);
    const features = useGetAudioFeatures(id);
        
    const durationMs = features.duration_ms; 
    const duration = formatDuration(durationMs);
    const key = formatKey(features.key);
    const mode = formatMode(features.mode);
    const timeSignature = features.time_signature;
    let tempo = features.tempo;
    tempo = Math.round(tempo);

    let tempData = createFeatureArray(features, 1);
    console.log({tempData});
    let featureData = getAudioFeaturesData(tempData);
    
    return(
        <Container>
            <GlobalStyles />
            <NavBar />
            <ContentContainer>
                { 
                track &&
                track.album &&
                featureData &&
                featureData[0].value ?
                    <MainContent>
                        <TrackInformation>
                            <TrackArt src={track.album.images[0].url}></TrackArt>
                            <FeaturesInformation>
                                <TrackData>
                                    <TrackName>{track.name}</TrackName>
                                    <div>{formatArtists(track.artists)}</div>
                                    <div>{track.album.name} • {formatYear(track.album.release_date)}</div>
                                </TrackData>
                                <TrackAnalysis>
                                    <AnalysisWrapper>
                                        <FeatureItem>{duration}</FeatureItem>
                                        <div>Duration</div>
                                    </AnalysisWrapper>
                                    <AnalysisWrapper>
                                        <FeatureItem>{key}</FeatureItem>
                                        <div>Key</div>
                                    </AnalysisWrapper>
                                    <AnalysisWrapper>
                                        <FeatureItem>{mode}</FeatureItem>
                                        <div>Modality</div>
                                    </AnalysisWrapper>
                                    <AnalysisWrapper>
                                        <FeatureItem>{timeSignature}</FeatureItem>
                                        <div>Time signature</div>
                                    </AnalysisWrapper>
                                    <AnalysisWrapper>
                                        <FeatureItem>{tempo} (BPM)</FeatureItem>
                                        <div>Tempo</div>
                                    </AnalysisWrapper>
                                </TrackAnalysis>
                            </FeaturesInformation>
                        </TrackInformation>
                        <ChartContainer>
                            <AudioChart featureData={featureData} />
                        </ChartContainer>
                    </MainContent> : 
                    <LoadingPage type={'full'} />
                }
            </ContentContainer>
        </Container>
    )

}

export default AudioFeatures;