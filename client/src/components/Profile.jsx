import NavBar from "./NavBar";
import { 
    useGetUser, 
    useGetFollowing, 
    useGetTopArtists,
    useGetTopTracks, 
    formatArtists 
} from "../spotify"

import LoadingPage from "./LoadingPage";
import GlobalStyles from "./styles/Global";
import { Container } from "./styles/Container";
import { ContentContainer } from "./styles/ContentContainer";
import { TrackMatrix } from "./styles/TrackMatrix";
import { 
    Main, 
    ProfileInformation, 
    ProfilePicture, 
    DisplayName, 
    FollowItems, 
    TopItems, 
    TopCategory,
    TopHeader,
    TrackCard,
    Index, 
    TrackArt, 
    TrackName,
    TrackAlbumArtists, 
    ArtistCard,
    ArtistPicture
} from "./styles/Profile.styled";

const LONG = 'time_range=long_term'

function Profile() {
    const profile = useGetUser();
    const following = useGetFollowing();
    const topArtists = useGetTopArtists(LONG);
    const topTracks = useGetTopTracks(LONG);
    
    return (
        <Container>
            <GlobalStyles />
            <NavBar />
            <ContentContainer>
                { 
                profile && 
                following && 
                topArtists &&
                topTracks &&
                topArtists.items &&
                topTracks.items ? 
                    <Main>
                        <ProfileInformation>
                            <ProfilePicture src={profile.images[1].url}></ProfilePicture>
                            <DisplayName> {profile.display_name} </DisplayName>
                            <FollowItems>
                                <div>{profile.followers.total} <span>Followers</span></div>
                                <div>{following.artists.total} <span>Following</span></div>
                            </FollowItems>
                        </ProfileInformation>
                        <TopItems>
                            <TopCategory>
                                <TopHeader to="/top-tracks">Top Tracks</TopHeader>
                                {topTracks.items.slice(0, 5).map((track, i) => (
                                    <TrackCard to={"/track/" + track.id} key={i}>
                                        <Index>{i + 1}</Index>
                                        <TrackArt src={track.album.images[0].url}></TrackArt>
                                        <TrackMatrix>
                                            <TrackName>{track.name}</TrackName>
                                            <TrackAlbumArtists>{formatArtists(track.artists)} • {track.album.name}</TrackAlbumArtists>
                                        </TrackMatrix>
                                    </TrackCard>
                                ))}
                            </TopCategory>
                            <TopCategory>
                                <TopHeader to="/top-artists">Top Artists</TopHeader>
                                {topArtists.items.slice(0, 5).map((artist, i) => (
                                    <ArtistCard key={i}>
                                        <Index>{i + 1}</Index>
                                        <ArtistPicture src={artist.images[0].url}></ArtistPicture>
                                        <div>{artist.name}</div>
                                    </ArtistCard>
                                ))}
                            </TopCategory>
                        </TopItems>
                    </Main> : 
                    <LoadingPage />
                }
            </ContentContainer>
        </Container>
    )
}

export default Profile