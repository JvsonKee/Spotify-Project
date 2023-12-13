import NavBar from '../../components/NavBar';
import { Container } from '../../components/styles/Container';
import GlobalStyles from '../../components/styles/Global';
import { ContentContainer } from '../../components/styles/ContentContainer';
import LoadingPage from '../../components/LoadingPage';
import Dropdown from '../../components/Dropdown';
import { useState } from 'react';
import { MainContent } from '../../components/styles/MainContent';
import { Header, HeaderContainer } from '../TopTracks/TopTracks.styled';
import TopArtistsList from '../../components/TopArtistsList';

const SHORT = 'time_range=short_term';
const MEDIUM = 'time_range=medium_term';
const LONG = 'time_range=long_term';

function TopArtists() {
    const [status, setStatus] = useState('All Time');

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
                        <LoadingPage type={'full'} />
                    }
                </MainContent>
            </ContentContainer>
        </Container>
    )
}

export default TopArtists;