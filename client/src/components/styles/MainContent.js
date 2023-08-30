import styled from 'styled-components';

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: space-between;
    background-color: var(--light-black);
    border-radius: 15px;
    width: 70vw;
    height: 87vh;
    padding: 5vh 5vw;
    overflow: scroll;

    @media screen and (max-width: 820px) {
        width: 100%;
        height: 82vh;
    }
`