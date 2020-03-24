import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Header from '../../common/Header';

class FormContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="FormContainerWrapper">
        <Header>
          <div> <FontAwesomeIcon icon={faBars} /> </div>
          <div> cxLoyalty </div>
          <div></div>
        </Header>
        <main></main>
      </div>
    );
  }
}

FormContainer.propTypes = {
  // bla: PropTypes.string,
};

FormContainer.defaultProps = {
  // bla: 'test',
};

export default FormContainer;
