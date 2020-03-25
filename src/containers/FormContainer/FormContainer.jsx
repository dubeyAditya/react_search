import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Header from '../../common/Header';
import TabList from '../../common/TabList/TabList'; // Tab Factory
import SearchForm from '../../components/SearchForm';
import Empty from '../../common/Empty/Empty';

class FormContainer extends PureComponent {
  constructor(props) {
    super(props);

  this.state = {
      selectedTab: 1,
    };

   this.renderTabContent = this.renderTabContent.bind(this); 
   this.changeTab = this.changeTab.bind(this);  
  }

  renderTabContent() {
    const { selectedTab } = this.state;
    switch (selectedTab) {
      case 1:
        return <SearchForm></SearchForm>

      default:
        return <Empty />
    }
  }

  changeTab(value){
     this.setState({selectedTab:value});
  }


  render() {

    const { selectedTab } = this.state;
    const { renderTabContent, changeTab } = this;

    return (
      <div className="FormContainerWrapper">
        <Header>
          <div> <FontAwesomeIcon icon={faBars} /> </div>
          <div> cxLoyalty </div>
          <div></div>
        </Header>
        <main>
          <TabList onChange={changeTab} selected={selectedTab}></TabList>
          {renderTabContent()}
        </main>
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
