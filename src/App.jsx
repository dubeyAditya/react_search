import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faBars } from '@fortawesome/free-solid-svg-icons'
import Style, { AppWrpper, Header } from './styled';
const App = () => {
    return (
        <AppWrpper>
            
            <Header > 
            <div><FontAwesomeIcon icon={faBars} /> </div>
            <div>  Hello React App</div>  
            <div> <FontAwesomeIcon icon={faEdit} /> </div>
            </Header>
            <Style/>
        </AppWrpper>)
}

export default App;