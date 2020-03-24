import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faBars } from '@fortawesome/free-solid-svg-icons';
import Header from '../../common/Header';

class SearchContainer extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount() {
    console.log('SearchContainer will mount');
  }

  componentWillUpdate(nextProps, nextState){
    console.log('SearchContainer will update', nextProps, nextState);
  }

 

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="SearchContainerWrapper">
        <Header >
          <div> <FontAwesomeIcon icon={faBars} /> </div>
          <div> Place Details </div>
          <div> <FontAwesomeIcon icon={faEdit} /> </div>
        </Header>
        <main></main>
      </div>
    );
  }
}

SearchContainer.propTypes = {
  // bla: PropTypes.string,
};

SearchContainer.defaultProps = {
  // bla: 'test',
};

export default SearchContainer;
