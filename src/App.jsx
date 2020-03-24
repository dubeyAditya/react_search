import React from "react";
import Style, { AppWrpper } from './App.styles';
import  FlightSearch from "./containers/FlightSearch";
const App = () => {
    return (
        <AppWrpper>
            <FlightSearch />
            <Style />
        </AppWrpper>)
}

export default App;