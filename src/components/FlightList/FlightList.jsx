import React from 'react';
import PropTypes from 'prop-types';
import { FlightListWrapper } from './FlightList.styles';
import Empty from '../../common/Empty/Empty';
import FlightDetails from '../FlightDetails';

const FlightList = ({flights}) => {
 
 const renderFlightDetails = () => {
  if(!flights.length){
    return <Empty />
  }
  return flights.map(flight => <FlightDetails flight={flight} />)
 } 
 
 return <div className="FlightListWrapper">
    <FlightListWrapper>
      {renderFlightDetails()}
    </FlightListWrapper>
  </div>
};

FlightList.propTypes = {
  flights: PropTypes.array
};

FlightList.defaultProps = {
  flights: [1],
};

export default FlightList;
