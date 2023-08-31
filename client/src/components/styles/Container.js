import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 1px;
    overflow: hidden;

    @media screen and (max-width: 820px) {
        flex-direction: column-reverse
    }
`