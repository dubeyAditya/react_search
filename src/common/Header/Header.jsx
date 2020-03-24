import React from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper } from './Header.styles';

const Header = (props) => (
 <HeaderWrapper>{props.children}</HeaderWrapper>
);

Header.propTypes = {
  childrens: PropTypes.element
};

Header.defaultProps = {
  // bla: 'test',
};

export default Header;
