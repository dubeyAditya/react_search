import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Radio.styles';

const Radio = ({ index, label, value }) => (
  <div className="RadioWrapper">
    <input id={index} type="radio" value={value} />
    <label style={{marginLeft:'1rem'}} htmlFor={index}>{label}</label>
  </div>
);

Radio.propTypes = {
  // bla: PropTypes.string,
};

Radio.defaultProps = {
  // bla: 'test',
};

export default Radio;
