import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const DropdownContainer = styled.div`
    width: 200px;
    position: relative;
`

export const Select = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    color: var(--text-grey);
    transition: 0.4s ease-in-out;
    cursor: pointer;

    &:hover {
       color: var(--text-white);
    }
`

export const Selected = styled.span`
    font-size: 15px;
`

export const Caret = styled(FontAwesomeIcon)`
    font-size: 15px;
    transition: 0.4s;

    &:hover {
        color: var(--accent-green);
    }

    &.active {
        transform: rotate(180deg);
    }
`

export const Menu = styled.div`
    background-color: var(--hover); 
    position: absolute;
    opacity: 0;
    display: none;
    transition: 0.2s;
    z-index: 1;
    width: 200px;
    height: 100px;
    border-radius: 10px;
    font-size: 15px;
    cursor: pointer;

    div {
        width: 180px;
        font-size: 14px;
        color: var(--text-grey);

        &:hover {
            color: var(--text-white);
        }
    }

    &.active {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        opacity: 1;
    }
`

