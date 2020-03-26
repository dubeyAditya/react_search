import React from 'react';
import PropTypes from 'prop-types';
import { FlightCard, Title, Content, Footer, ClassBox, DepartureArrivalBox } from './FlightDetails.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

const FlightDetails = ({ flight }) => {

  const { name, departs, arrives, flightClass , origin, dest } = flight;


  const renderClassBox = (item) => (
      <ClassBox>
        <div>{`$${item.fare}`}</div>
        <div>{item.title}</div>
     </ClassBox>
  )

  return (<FlightCard>
    <Title>
      <div><FontAwesomeIcon icon={faPlaneDeparture} /> </div>
      <div> {name} </div>
    </Title>
    
    <Content>
      <DepartureArrivalBox>
        <div>{departs}</div>
        <div>{origin}</div>
      </DepartureArrivalBox>
      <DepartureArrivalBox>
        <div>{arrives}</div>
        <div>{dest}</div>
      </DepartureArrivalBox>
    </Content>

    <Footer>
     {flightClass.map(renderClassBox)}
    </Footer>
  </FlightCard>)
};

FlightDetails.propTypes = {
  flight: PropTypes.object,
};

FlightDetails.defaultProps = {
  // bla: 'test',
};

export default FlightDetails;
