import { useNavigate } from "react-router-dom"
import styled from "styled-components";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonContainer = styled.div`
    /* background-color: green; */
`

const Button = styled.button`
    width: 45px;
    height: 45px;
    background-color: var(--black);
    border: none;
    border-radius: 50%;
    transition: 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: var(--accent-green);
        transform: translateX(-3px);
    }
`

const Arrow = styled(FontAwesomeIcon)`
    font-size: 15px;
    color: var(--text-white);
`

function BackButton() {
    let navigate = useNavigate();
    return (
        <ButtonContainer>
            <Button onClick={() => navigate(-1)}><Arrow icon={faArrowLeft}/></Button>
        </ButtonContainer>
    )
}

export default BackButton