import React from 'react';
import PropTypes from 'prop-types';
import { FlightCard, Title } from './FlightDetails.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

const FlightDetails = (props) => (
  <FlightCard>
   <Title>
     <div><FontAwesomeIcon icon={faPlaneDeparture}/> </div>
     <div> {props.flight.name} </div>
   </Title>
   
  </FlightCard>
);

FlightDetails.propTypes = {
  flight: PropTypes.object,
};

FlightDetails.defaultProps = {
  // bla: 'test',
};

export default FlightDetails;
