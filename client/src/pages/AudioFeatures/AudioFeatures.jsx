import AudioChart from '../../components/AudioChart'
import NavBar from "../../components/NavBar";
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
} from '../../spotify';
import { useParams } from 'react-router-dom';
import LoadingPage from '../../components/LoadingPage';
import GlobalStyles from '../../components/styles/Global';
import { Container } from '../../components/styles/Container';
import { ContentContainer } from '../../components/styles/ContentContainer';
import { MainContent } from '../../components/styles/MainContent';
import { 
    TrackInformation,
    TrackArt,
    FeaturesInformation,
    TrackData,
    TrackName,
    TrackAnalysis,
    AnalysisWrapper,
    FeatureItem,
    ChartContainer,
    AlbumLink
} from './AudioFeatures.styled';
import BackButton from '../../components/BackButton';


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
                        <BackButton />
                        <TrackInformation>
                            <TrackArt src={track.album.images[0].url}></TrackArt>
                            <FeaturesInformation>
                                <TrackData>
                                    <TrackName>{track.name}</TrackName>
                                    <div>{formatArtists(track.artists)}</div>
                                    <div>
                                        <AlbumLink href={track.album.external_urls.spotify} target='_blank' rel='noreferrer'>{track.album.name} </AlbumLink>
                                         • {formatYear(track.album.release_date)}
                                    </div>
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