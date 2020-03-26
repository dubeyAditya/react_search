import React from 'react';
import PropTypes from 'prop-types';
import { FloatingButton, Button } from './FilterButtons.styles';


const FilterButtons = ({ onFilter }) => (
  <FloatingButton>
    <Button onClick={() => onFilter('Sort By')} >Sort By</Button>
    <Button onClick={() => onFilter('Filter')}>Filter</Button>
  </FloatingButton>
);

FilterButtons.propTypes = {
  // bla: PropTypes.string,
};

FilterButtons.defaultProps = {
  // bla: 'test',
};

export default FilterButtons;
