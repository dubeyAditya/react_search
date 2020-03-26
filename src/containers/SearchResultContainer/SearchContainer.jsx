import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Header from '../../common/Header';
import FlightList from '../../components/FlightList';
import FilterButtons from '../../components/FilterButtons';
import { TravelDetailsWrapper, DateAndTravelersWrapper } from './SearchContainer.styles';
import flightsData from '../../../public/json/flight.details';
import { searchFlightByDestination } from '../../utility/search.utility';

class SearchContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      flights: flightsData,
    };
    
    this.renderDate = this.renderDate.bind(this);
    this.formatDate =  this.formatDate.bind(this);
    this.getFlightList =  this.getFlightList(this);
  }

  renderDate() {
    const { deptDate, returnDate, traveler } = this.props.form;
    const { formatDate } = this;
    const journeDate = returnDate
      ? `${formatDate(deptDate)}-${formatDate(returnDate)}`
      : `${formatDate(deptDate)}`;
    return `${journeDate} | ${traveler} Adult(s)`;
  }

  formatDate(journeDate) {
    const date = new Date(journeDate).toDateString();
    return date.split(" ").filter((s, i) => i == 1 || i == 2).join(" ");
  }

  getFlightList() {
    const { departure, dest } = this.props.form;
    const flights = this.state.flights;
    return searchFlightByDestination(flights, departure, dest);
  }

  render() {
    const { getFlightList, renderDate } = this;
    const { onBack, form } = this.props;
    const { dest, departure } = form;
    return (
      <div className="SearchContainerWrapper">
        <Header >
          <div className='back-button'> <FontAwesomeIcon onClick={onBack} icon={faArrowLeft} /> </div>
          <div>
            <TravelDetailsWrapper>
              <div> {departure} </div>
              <div><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></div>
              <div>{dest}</div>
            </TravelDetailsWrapper>
            <DateAndTravelersWrapper>{renderDate()}</DateAndTravelersWrapper>
          </div>
          <div className='edit-button'> <FontAwesomeIcon icon={faEdit} /> </div>
        </Header>
        <main>
          <FlightList list={getFlightList} />
          <FilterButtons />
        </main>
      </div>
    );
  }
}

SearchContainer.propTypes = {
  form: PropTypes.object,
  onBack: PropTypes.func
};

SearchContainer.defaultProps = {
  // bla: 'test',
};

export default SearchContainer;
