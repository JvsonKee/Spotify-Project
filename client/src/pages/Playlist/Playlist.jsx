import { useParams } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import LoadingPage from '../../components/LoadingPage';
import { Container } from '../../components/styles/Container';
import { ContentContainer } from '../../components/styles/ContentContainer';
import GlobalStyles from '../../components/styles/Global';
import { TrackMatrix } from '../../components/styles/TrackMatrix';
import { MainContent } from '../../components/styles/MainContent';
import AudioChart from '../../components/AudioChart';
import { ChartContainer } from '../AudioFeatures/AudioFeatures.styled';
import {
    useGetPlaylist,
    formatArtists,
    useGetTracksFeatures,
    createFeatureArray,
    getAudioFeaturesData,
} from '../../spotify';
import { 
    PlaylistInformation,
    PlaylistArt,
    PlaylistData,
    PlaylistName,
} from './Playlist.styled';
import {
    Index,
    TracksContainer,
    TrackCard,
    TrackArt,
    TrackName,
    TrackArtists,
    TrackAlbum
} from "../../components/styles/Tracklist";

function Playlist() {
    const { id } = useParams();
    const playlist = useGetPlaylist(id);

    let features = useGetTracksFeatures(playlist?.tracks?.items);
    console.log(features);

    let playFeatures = createFeatureArray(features?.audio_features, 0);
    console.log({playFeatures});

    let featureData = getAudioFeaturesData(playFeatures);
    console.log({featureData});
    
    return (
        <Container>
            <GlobalStyles />
            <NavBar />
            <ContentContainer>
                { 
                playlist &&
                playlist.tracks &&
                featureData &&
                featureData[0].value ?
                    <MainContent>
                        <PlaylistInformation>
                            <PlaylistArt src={playlist.images[0].url}></PlaylistArt>
                            <PlaylistData>
                                <PlaylistName>{playlist.name}</PlaylistName>
                                <div>{playlist.owner.display_name}</div>
                                <div>{playlist.tracks.total} tracks</div>
                            </PlaylistData>
                        </PlaylistInformation>
                        <ChartContainer>
                            <AudioChart featureData={featureData} />    
                        </ChartContainer>
                        <TracksContainer>
                            {playlist.tracks.items.map((data, i) => (
                                <TrackCard to={"/track/" + data.track.id} key = {i}>
                                    <Index>{i + 1}</Index>
                                    <TrackArt src={data.track.album.images[0].url}></TrackArt>
                                    <TrackMatrix>
                                        <TrackName>{data.track.name}</TrackName>
                                        <TrackArtists>{formatArtists(data.track.artists)}</TrackArtists>
                                        <TrackAlbum>{data.track.album.name}</TrackAlbum>
                                    </TrackMatrix>
                                </TrackCard>
                            ))}
                        </TracksContainer>
                    </MainContent> : 
                   <LoadingPage type={'full'} />
                }
            </ContentContainer>
        </Container>
    )
}

export default Playlist

