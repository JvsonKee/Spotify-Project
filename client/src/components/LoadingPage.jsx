import styled from 'styled-components'
import { MainContent } from './styles/MainContent'

const HalfLoad = styled.div`
    margin-top: 33vh;
    text-align: center;
    color: var(--text-grey);
`

const FullLoad = styled(MainContent)`
    justify-content: center;
    align-items: center;
    color: var(--text-grey);
`

function LoadingPage( {type} ) {
    return (
        type == 'half' ? <HalfLoad>Loading...</HalfLoad> :
        type == 'full' ? <FullLoad>Loading...</FullLoad> :
        null
    )
}

export default LoadingPage;