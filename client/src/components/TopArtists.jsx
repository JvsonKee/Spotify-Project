import NavBar from './NavBar';
import { Container } from './styles/Container';
import GlobalStyles from './styles/Global';
import { ContentContainer } from './styles/ContentContainer';
import LoadingPage from './LoadingPage';
import Dropdown from './Dropdown';
import { useState } from 'react';
import { MainContent } from './styles/MainContent';
import { Header, HeaderContainer } from './styles/TopTracks.styled';
import TopArtistsList from './TopArtistsList';

const SHORT = 'time_range=short_term';
const MEDIUM = 'time_range=medium_term';
const LONG = 'time_range=long_term';

function TopArtists() {
    const [status, setStatus] = useState('All Time');
    console.log({status});
    return (
        <Container>
            <GlobalStyles />
            <NavBar />
            <ContentContainer>
                <MainContent>
                    <HeaderContainer>
                        <Header>Top Artists</Header>
                        <Dropdown setStatus={setStatus} />
                    </HeaderContainer>
                    {
                        status == 'All Time' ? <TopArtistsList range={LONG}/> :
                        status == 'Last 6 Months' ? <TopArtistsList range={MEDIUM}/> :
                        status == 'Last 4 Weeks' ? <TopArtistsList range={SHORT}/> :
                        <LoadingPage />
                    }
                </MainContent>
            </ContentContainer>
        </Container>
    )
}

export default TopArtists;