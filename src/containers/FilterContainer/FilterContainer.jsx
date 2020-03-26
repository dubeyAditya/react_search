import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from '../../common/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import FiltrCriteriaList from '../../components/FilterCriteriaList';
import Button from '../../common/Button';
import Empty from '../../common/Empty';

class FilterContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      criteria: '',
    };
  }

  render() {
    const { onBack, filterType } = this.props;
    
    const handleCriteriaChange = (criteria) => {
      this.setState({criteria});
    }
    const renderFilters = ()=> {
      return filterType === 'Sort By' 
      ?  <FiltrCriteriaList onChage={handleCriteriaChange}/>
       : <Empty></Empty>;
    }
    
    return (
      <div className="FilterContainerWrapper">
        <Header>
          <div><FontAwesomeIcon onClick={onBack} icon={faArrowLeft} /></div>
          <div>{filterType}</div>
          <div></div>
        </Header>
        <main>
           {renderFilters()}
           <Button size='large' color='green'> Done </Button>
        </main>
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
