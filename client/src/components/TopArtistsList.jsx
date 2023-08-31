import propTypes from 'prop-types';
import LoadingPage from './LoadingPage';
import { useGetTopArtists } from '../spotify';
import {
    ArtistContainer,
    ArtistCard,
    ArtistName,
    ArtistPicture,
} from './styles/TopArtists.styled';
import TopArtists from './TopArtists';

function TopArtistsList( {range} ) {
    let topArtists = useGetTopArtists(range);
    
    return (    
        <div>
            {
                topArtists &&
                topArtists.items ? 
                <ArtistContainer>
                    {topArtists.items.map((artist, i) => (
                        <ArtistCard key={i}>
                            <ArtistPicture src={artist.images[0].url}></ArtistPicture>
                            <ArtistName>{artist.name}</ArtistName>
                        </ArtistCard>
                    ))}
                </ArtistContainer> :
                <LoadingPage type={'half'} />
            }
        </div>

    )
}

TopArtistsList.propTypes = {
    range: propTypes.string
}

export default TopArtistsList;