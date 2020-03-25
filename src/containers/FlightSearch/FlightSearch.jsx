import React, { useReducer } from 'react';
import SearchResult from "../SearchResultContainer";
import Form from '../FormContainer';
import Filter from '../FilterContainer';
import { AppContext, reducer, iniitalState } from '../../context/AppContext';



const FlightSearch = () => {

  const [state, dispatch] = useReducer(reducer, iniitalState);

  const { filterType, searchQuery, selectedView } = state;

  const renderContent = () => {
    switch (selectedView) {
      case "form":
        return <Form></Form>
      case "result":
        return <SearchResult query={searchQuery}></SearchResult>
      case "filter":
        return <Filter filterType={filterType}></Filter>
    }
  }

  return <div className="FlightSearchWrapper">
    <AppContext.Provider value={{ state, dispatch }}>
      {renderContent()}
    </AppContext.Provider>
  </div>
};

FlightSearch.propTypes = {
  // bla: PropTypes.string,
};

FlightSearch.defaultProps = {
  // bla: 'test',
};

export default FlightSearch;