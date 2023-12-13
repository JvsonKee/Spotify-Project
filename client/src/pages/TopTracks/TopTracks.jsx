import NavBar from "../../components/NavBar";
import { Container } from "../../components/styles/Container";
import GlobalStyles from "../../components/styles/Global";
import { ContentContainer } from "../../components/styles/ContentContainer";
import TopTracksList from "../../components/TopTracksList";
import LoadingPage from "../../components/LoadingPage";
import { useState } from "react";
import { MainContent } from "../../components/styles/MainContent";
import {
    Header,
    HeaderContainer,
} from "./TopTracks.styled";
import Dropdown from "../../components/Dropdown";


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
                        <LoadingPage type={'full'} />
                    }       
                </MainContent>   
            </ContentContainer>
        </Container>
    )
}

export default TopTracks;