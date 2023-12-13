import NavBar from '../../components/NavBar.jsx';
import { useGetPlaylists } from '../../spotify/index.js';
import LoadingPage from '../../components/LoadingPage.jsx';
import { Container } from '../../components/styles/Container.js';
import { MainContent } from '../../components/styles/MainContent.js';
import { 
    Header,
    PlaylistsContainer,
    PlaylistCard,
    PlaylistArt,
    PlaylistInformation,
    PlaylistName,
    TrackTotal
} from './Playlists.styled.js';
import GlobalStyles from '../../components/styles/Global.js';
import { ContentContainer } from '../../components/styles/ContentContainer.js';


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