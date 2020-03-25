import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane,faCar, faHotel } from '@fortawesome/free-solid-svg-icons';
import { TabListWrapper,Tab } from './TabList.styles';


const TabList = ({selected,onChange}) => {
  
  const handleTabChange = (tab) => () => {
     onChange(tab);
  } 

  return <div className="TabListWrapper">
      <TabListWrapper>
        <Tab onClick={handleTabChange(1)} selected={selected === 1}>
          <span><FontAwesomeIcon icon={faPlane} rotation={270} /></span>
          <span>Flights</span>
        </Tab>
        <Tab onClick={handleTabChange(2)}  selected={selected === 2}>
          <span><FontAwesomeIcon icon={faHotel} /></span>
          <span>Hotels</span>
        </Tab>
        <Tab onClick={handleTabChange(3)}  selected={selected === 3}>
        <span><FontAwesomeIcon icon={faCar} /></span>
          <span>Cars</span>
        </Tab>
      </TabListWrapper>
  </div>
};

TabList.propTypes = {
  selected: PropTypes.number,
  onChange: PropTypes.func
};

TabList.defaultProps = {
  // bla: 'test',
};

export default TabList;
