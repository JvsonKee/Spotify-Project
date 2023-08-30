import {
    Index,
    TracksContainer,
    TrackCard,
    TrackArt,
    TrackName,
    TrackArtists,
    TrackAlbum
} from "./styles/Tracklist";
import propTypes from 'prop-types';
import { TrackMatrix } from "./styles/TrackMatrix";
import { useGetTopTracks, formatArtists } from "../spotify";
import LoadingPage from "./LoadingPage";

function TopTracksList( {range} ) {
    let topTracks = useGetTopTracks(range);
    return (
        <div>
            {
                topTracks &&
                topTracks.items ? 
                    <TracksContainer>
                    {topTracks.items.map((track, i) => (
                        <TrackCard to={'/track/' + track.id} key={i}>
                            <Index>{i + 1}</Index>
                            <TrackArt src={track.album.images[0].url}></TrackArt>
                            <TrackMatrix>
                                <TrackName>{track.name}</TrackName>
                                <TrackArtists>{formatArtists(track.artists)}</TrackArtists>
                                <TrackAlbum>{track.album.name}</TrackAlbum>
                            </TrackMatrix>
                        </TrackCard>
                    ))}
                    </TracksContainer>
                : <LoadingPage />
            }
        </div>
    )
}

TopTracksList.propTypes = {
    range: propTypes.string,
};

export default TopTracksList;