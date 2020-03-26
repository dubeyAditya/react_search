import React, { useReducer } from 'react';
import SearchResult from "../SearchResultContainer";
import Form from '../FormContainer';
import Filter from '../FilterContainer';
import { AppContext, reducer, iniitalState } from '../../context/AppContext';



const FlightSearch = () => {

  const [state, dispatch] = useReducer(reducer, iniitalState);

  const { filterType, form, selectedView } = state;

  const handleSearchBackClick = (name) => {
    if (name) { // Load Filter on Filter Click
      dispatch({ type: 'FILTER', payload: { filterType: name } })
    }
    else {
      //load From
      dispatch({ type: 'FORM' });
    }
  }

  const handleFilterBackClick = () => dispatch({ type: 'SEARCH', payload: { form } }); // Load Search


  const renderContent = () => {
    switch (selectedView) {
      case "form":
        return <Form></Form>
      case "result":
        return <SearchResult onBack={handleSearchBackClick} form={form}></SearchResult>
      case "filter":
        return <Filter onBack={handleFilterBackClick} filterType={filterType}></Filter>
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
