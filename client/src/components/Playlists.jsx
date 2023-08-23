import { Link } from 'react-router-dom'
import NavBar from './NavBar.jsx';
import { useGetPlaylists } from '../spotify/index.js';
import LoadingPage from './LoadingPage.jsx';
import { Container } from './styles/Container.js';
import { 
    MainContent,
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
                { playlists && playlists.items ?
                    <MainContent>
                        <Header>Your Playlists</Header>
                        <PlaylistsContainer>
                            {playlists.items.map((playlist, i) => (
                                <PlaylistCard key={i}>
                                    <Link to={"/playlist/" + playlist.id}><PlaylistArt src={playlist.images[0].url}></PlaylistArt></Link>
                                    <PlaylistInformation>
                                        <PlaylistName to={"/playlist/" + playlist.id}>{playlist.name}</PlaylistName>
                                        <TrackTotal>{playlist.tracks.total} tracks</TrackTotal>
                                    </PlaylistInformation>
                                </PlaylistCard>
                            ))}
                        </PlaylistsContainer>
                    </MainContent> :
                    <LoadingPage />
                }
            </ContentContainer>
        </Container>
       
    )
}

export default Playlists