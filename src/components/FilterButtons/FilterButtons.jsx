import React from 'react';
import PropTypes from 'prop-types';
import { FloatingButton ,Button } from './FilterButtons.styles';


const FilterButtons = (props) => (
  <FloatingButton>
    <Button>Sort</Button>
    <Button>Filter</Button>
  </FloatingButton>
);

FilterButtons.propTypes = {
  // bla: PropTypes.string,
};

FilterButtons.defaultProps = {
  // bla: 'test',
};

export default FilterButtons;
