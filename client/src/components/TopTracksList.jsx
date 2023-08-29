import {
    Index,
    TracksContainer,
    TrackCard,
    TrackArt,
    TrackName,
    TrackAlbumArtists
} from "./styles/TopTracks.styled";
import propTypes from 'prop-types';
import { TrackMatrix } from "./styles/TrackMatrix";
import { useGetTopTracks, formatArtists } from "../spotify";
import LoadingPage from "./LoadingPage";
import { ListContainer } from "./styles/TopArtistsList.styled";

function TopTracksList( {range} ) {
    let topTracks = useGetTopTracks(range);
    return (
        <ListContainer>
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
                                <TrackAlbumArtists>{formatArtists(track.artists)} • {track.album.name}</TrackAlbumArtists>
                            </TrackMatrix>
                        </TrackCard>
                    ))}
                    </TracksContainer>
                : <LoadingPage />
            }
        </ListContainer>
    )
}

TopTracksList.propTypes = {
    range: propTypes.string,
};

export default TopTracksList;