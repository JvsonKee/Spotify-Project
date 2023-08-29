import {
    DropdownContainer,
    Select, 
    Selected,
    Caret, 
    Menu
} from "./styles/Dropdown.styled";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


function Dropdown() {
    const [open, setOpen] = useState(false); 
    const [selected, setSelected] = useState('All Time');

    return (
        <DropdownContainer className="dropdown" id={selected} onClick={() => {setOpen(!open)}}>
            <Select className='select'>
                <Selected className='selected'>{selected}</Selected>
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

export default Dropdown;