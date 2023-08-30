import NavBar from "./NavBar";
import { Container } from "./styles/Container";
import GlobalStyles from "./styles/Global";
import { ContentContainer } from "./styles/ContentContainer";
import TopTracksList from "./TopTracksList";
import LoadingPage from "./LoadingPage";
import { useState } from "react";
import { MainContent } from "./styles/MainContent";
import {
    Header,
    HeaderContainer,
} from "./styles/TopTracks.styled";
import Dropdown from "./Dropdown";


const SHORT = 'time_range=short_term';
const MEDIUM = 'time_range=medium_term';
const LONG = 'time_range=long_term';


function TopTracks() {
    const [status, setStatus] = useState('All Time');

    return (
        <Container>
            <GlobalStyles />
            <NavBar />
            <ContentContainer>
                <MainContent>
                    <HeaderContainer>
                        <Header>Top Tracks</Header>
                        <Dropdown setStatus={setStatus} />
                    </HeaderContainer>
                    {
                        status == 'All Time' ? <TopTracksList range={LONG} /> :
                        status == 'Last 6 Months' ? <TopTracksList range={MEDIUM} /> :
                        status == 'Last 4 Weeks' ? <TopTracksList range={SHORT} /> :
                        <LoadingPage />
                    }       
                </MainContent>   
            </ContentContainer>
        </Container>
    )
}

export default TopTracks;