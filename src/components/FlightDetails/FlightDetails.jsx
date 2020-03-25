import React from 'react';
import PropTypes from 'prop-types';
import { FlightCard } from './FlightDetails.styles';

const FlightDetails = (props) => (
  <FlightCard>
   Test Card {props.flight}
  </FlightCard>
);

FlightDetails.propTypes = {
  // flight: PropTypes.object,
};

FlightDetails.defaultProps = {
  // bla: 'test',
};

export default FlightDetails;
