import {
    DropdownContainer,
    Select, 
    Selected,
    Caret, 
    Menu
} from "./styles/Dropdown.styled";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import propTypes from 'prop-types';


function Dropdown( {setStatus} ) {
    const [open, setOpen] = useState(false); 
    const [selected, setSelected] = useState('All Time');

    useEffect(() => {
        setStatus(selected);
    })

    return (
        <DropdownContainer onClick={() => {setOpen(!open)}}>
            <Select>
                <Selected>{selected}</Selected>
                <Caret icon={faCaretDown} className={`${open? 'active' : 'inactive'}`}/>
            </Select>
            <Menu className={`${open? 'active' : 'inactive'}`}>
                <div onClick={() => {setSelected('All Time')}}>All Time</div>
                <div onClick={() => {setSelected('Last 6 Months')}}>Last 6 Months</div>
                <div onClick={() => {setSelected('Last 4 Weeks')}}>Last 4 Weeks</div>
            </Menu>
        </DropdownContainer>
    )
}

Dropdown.propTypes = {
    setStatus : propTypes.func
}

export default Dropdown;