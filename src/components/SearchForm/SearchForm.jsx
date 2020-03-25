import React from 'react';
import PropTypes from 'prop-types';
import {
  SearchFormWrapper,
  FormItemWrapper,
  PlaceSelectionWrapper, DateSelectionWrapper
} from './SearchForm.styles';
import Button from '../../common/Button';
import Input from '../../common/Input';

const SearchForm = (props) => (
  <div className="SearchFormWrapper">
    <SearchFormWrapper>
      <PlaceSelectionWrapper>
        <FormItemWrapper>
          <label> Departure </label>
          <Input size='large' required={true} type='text'></Input>
        </FormItemWrapper>
        <FormItemWrapper>
          <label> Destination </label>
          <Input size='large' required={true} type='text'></Input>
        </FormItemWrapper>
      </PlaceSelectionWrapper>

      <DateSelectionWrapper>
        <FormItemWrapper>
          <label> Departure Date </label>
          <Input required={true} type='date'></Input>
        </FormItemWrapper>
        <FormItemWrapper>
          <label> Return Date </label>
          <Input required={true} type='date'></Input>
        </FormItemWrapper>
        <FormItemWrapper>
          <label> Travelers </label>
          <Input required={true} type='number'></Input>
        </FormItemWrapper>
        <FormItemWrapper>
          <label> Class </label>
          <Input required={true} type='text'></Input>
        </FormItemWrapper>
      </DateSelectionWrapper>

      <Button size='large' color='green'>Search</Button>
    </SearchFormWrapper>
  </div>
);

SearchForm.propTypes = {
  // bla: PropTypes.string,
};

SearchForm.defaultProps = {
  // bla: 'test',
};

export default SearchForm;
