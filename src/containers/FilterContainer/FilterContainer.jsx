import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from '../../common/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

class FilterContainer extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }



  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <div className="FilterContainerWrapper">
       <Header>
         <div><FontAwesomeIcon icon={faBackward}/></div>
         <div>{props.filterType}</div>
       </Header>
       <main></main>
      </div>
    );
  }
}

FilterContainer.propTypes = {
  filterType: PropTypes.string,
};

FilterContainer.defaultProps = {
  // bla: 'test',
};

export default FilterContainer;
