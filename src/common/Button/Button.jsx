import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './Button.styles';

const Button = ({size, color}) => (
  <div className="ButtonWrapper">
     <ButtonWrapper size={size} color={color} ></ButtonWrapper>
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
