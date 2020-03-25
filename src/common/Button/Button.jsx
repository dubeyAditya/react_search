import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './Button.styles';

const Button = (props) => (
  <div className="ButtonWrapper">
     <ButtonWrapper {...props}>{props.children}</ButtonWrapper>
  </div>
);

Button.propTypes = {
   size:PropTypes.string,
   type:PropTypes.string
};

Button.defaultProps = {
  size:'normal',
  color:'blue'
};

export default Button;
