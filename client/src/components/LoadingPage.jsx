import styled from 'styled-components'
import { Container } from "./styles/Container";
import { ContentContainer } from "./styles/ContentContainer";

const MainContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--light-black);
    border-radius: 15px;
    width: 70vw;
    height: 87vh;
    padding: 5vh 5vw;
    color: var(--text-grey)
`

function LoadingPage() {
    return (
        <Container>
            <ContentContainer>
                <MainContent>
                    <div>Loading...</div>
                </MainContent>

            </ContentContainer>
        </Container>
    )
}

export default LoadingPage;