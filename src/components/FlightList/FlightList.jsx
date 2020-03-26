import React from 'react';
import PropTypes from 'prop-types';
import { FlightListWrapper } from './FlightList.styles';
import Empty from '../../common/Empty/Empty';
import FlightDetails from '../FlightDetails';

const FlightList = ({list}) => {
 
 const renderFlightDetails = () => {
  if(!list.length){
    return <Empty />
  }
  return list.map((flight, index) => <FlightDetails key={index} flight={flight} />)
 } 
 
 return <div className="FlightListWrapper">
    <FlightListWrapper>
      {renderFlightDetails()}
    </FlightListWrapper>
  </div>
};

FlightList.propTypes = {
  list: PropTypes.array
};

FlightList.defaultProps = {
  list: [],
};

export default FlightList;
