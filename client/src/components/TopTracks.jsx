import NavBar from "./NavBar";
import { Container } from "./styles/Container";
import GlobalStyles from "./styles/Global";
import { ContentContainer } from "./styles/ContentContainer";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import TopTracksList from "./TopTracksList";
import LoadingPage from "./LoadingPage";
import { useState } from "react";
import {
    Header,
    HeaderContainer,
    MainContent,
} from "./styles/TopTracks.styled";
import {
    DropdownContainer,
    Select,
    Selected, 
    Caret,
    Menu
} from "./styles/Dropdown.styled";
import Dropdown from "./Dropdown";


const SHORT = 'time_range=short_term';
const MEDIUM = 'time_range=medium_term';
const LONG = 'time_range=long_term';


function TopTracks() {
    return (
        <Container>
            <GlobalStyles />
            <NavBar />
            <ContentContainer>
                <MainContent>
                    <HeaderContainer>
                        <Header>Top Tracks</Header>
                        <Dropdown />
                    </HeaderContainer>
                    <TopTracksList range={LONG} />
                </MainContent>   
            </ContentContainer>
        </Container>
    )
}

export default TopTracks;