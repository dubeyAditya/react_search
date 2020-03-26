import React from 'react';
import PropTypes from 'prop-types';
import { ListWrapper } from './FilterCriteriaList.styles';
import Radio from  '../../common/Radio';


const FilterCriteriaList = (props) => (
  <div className="FilterCriteriaListWrapper">
   <ListWrapper>
      <Radio index={1} label={'Sort Heighest to Lowes'} value={'assending'} ></Radio>
      <Radio index={2} label={'Sort Heighest to Lowes'} value={'assending'} ></Radio>
      <Radio index={3} label={'Sort Heighest to Lowes'} value={'assending'} ></Radio>
      <Radio index={4} label={'Sort Heighest to Lowes'} value={'assending'} ></Radio>
   </ListWrapper>
  </div>
);

FilterCriteriaList.propTypes = {
  onChage: PropTypes.func,
};

FilterCriteriaList.defaultProps = {
  // bla: 'test',
};

export default FilterCriteriaList;
