import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Header from '../../common/Header';
import FlightList from '../../components/FlightList';
import FilterButtons from '../../components/FilterButtons';

class SearchContainer extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidMount() {
    console.log('SearchContainer will mount', this.props.form);
  }

  componentWillUpdate(nextProps, nextState){
    console.log('SearchContainer will update', nextProps, nextState);
  }

  render () {
    return (
      <div className="SearchContainerWrapper">
        {JSON.stringify(this.props.from)}
        <Header >
          <div className='back-button'> <FontAwesomeIcon onClick={this.props.onBack} icon={faArrowLeft} /> </div>
          <div> Place Details </div>
          <div className='edit-button'> <FontAwesomeIcon icon={faEdit} /> </div>
        </Header>
        <main>
         <FlightList />
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
