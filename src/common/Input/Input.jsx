import React from 'react';
import PropTypes from 'prop-types';
import { InputWrapper } from './Input.styles';

const Input = (props) => (
  <div className="InputWrapper">
     <InputWrapper {...props} />
  </div>
);

Input.propTypes = {
  // bla: PropTypes.string,
};

Input.defaultProps = {
  // bla: 'test',
};

export default Input;
