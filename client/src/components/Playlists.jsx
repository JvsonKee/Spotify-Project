import NavBar from './NavBar.jsx';
import { useGetPlaylists } from '../spotify/index.js';
import LoadingPage from './LoadingPage';
import { Container } from './styles/Container';
import { MainContent } from './styles/MainContent';
import { 
    Header,
    PlaylistsContainer,
    PlaylistCard,
    PlaylistArt,
    PlaylistInformation,
    PlaylistName,
    TrackTotal
} from './styles/Playlists.styled.js';
import GlobalStyles from './styles/Global.js';
import { ContentContainer } from './styles/ContentContainer.js';


function Playlists() {
    const playlists = useGetPlaylists();
    return ( 
        <Container>
            <GlobalStyles />
            <NavBar />  
            <ContentContainer>
                <MainContent>
                    <Header>Your Playlists</Header>
                    { 
                    playlists && playlists.items ?
                        <PlaylistsContainer>
                            {playlists.items.map((playlist, i) => (
                                <PlaylistCard to={"/playlist/" + playlist.id} key={i}>
                                    <PlaylistArt src={playlist.images[0].url}></PlaylistArt>
                                    <PlaylistInformation>
                                        <PlaylistName>{playlist.name}</PlaylistName>
                                        <TrackTotal>{playlist.tracks.total} tracks</TrackTotal>
                                    </PlaylistInformation>
                                </PlaylistCard>
                            ))}
                        </PlaylistsContainer> :
                        <LoadingPage type={'half'} />
                    }
                </MainContent>
            </ContentContainer>
        </Container>
       
    )
}

export default Playlists