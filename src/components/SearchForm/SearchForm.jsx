import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchFormWrapper,
  FormItemWrapper,
  PlaceSelectionWrapper, DateSelectionWrapper
} from './SearchForm.styles';
import { AppContext, iniitalState } from '../../context/AppContext';
import Button from '../../common/Button';
import Input from '../../common/Input';
import { isEmpty } from '../../utility/valiadtion.utilty';

const SearchForm = (props) => {

  const [form, setForm] = useState(iniitalState.form);

  const { dispatch } = useContext(AppContext);

  const handleDestinationChange = (e) => {
    const value = e.target.value;
    setForm({ ...form, dest: value });
    console.log(value);
  }

  const handleDepartureChange = (e) => {
    const value = e.target.value;
    setForm({ ...form, departure: value });
    console.log(value);
  }

  const handleDeptDateChange = (e) => {
    const value = e.target.value;
    setForm({ ...form, deptDate: value });
    console.log(value);
  }

  const handleReturnDateChange = (e) => {
    const value = e.target.value;
    setForm({ ...form, returnDate: value });
    console.log(value);
  }

  const handleTravlerChange = (e) => {
    const value = e.target.value;
    setForm({ ...form, traveler: value });
    console.log(value);
  }

  const handleClassChange = (e) => {
    const value = e.target.value;
    setForm({ ...form, flightClass: value });
    console.log(value);
  }


  const isReturnValid = () => {
    const { dest, departure, deptDate, returnDate } = form;
    let validate = true;
    if (!returnDate && !deptDate) {
      alert("Please Select Destination and Origin ");
      return false;
    }
    if (dest === departure) {
      alert("Destination and Origin can not be same..!");
      validate = false;
    }
    if (new Date(deptDate).getTime() < new Date().getTime()) {
      alert("Journey Date should be greater or equal to Today's date");
      validate = false;
    }
    if (new Date(deptDate).getTime() > new Date(returnDate).getTime()) {
      alert(
        "Return Date is Not Valid Please Select a Date equal or greater than Departure Date..!"
      );
      validate = false;
    }
    return validate;
  }

  const isValidCity = () => {
    let validate = true;
    const { dest, departure } = form;
    if (!departure) {
      alert("Please Select Departure City !");
      validate = false;
    }

    if (!dest) {
      alert("Please Select Destination City !");
      validate = false;
    }
    return validate;
  }

  const isDepartValid = () => {
    const { dest, departure, deptDate } = form;
    let validate = true;

    if (!deptDate) {
      alert("Please Select Departure Date !");
      validate = false;
    }

    if (dest === departure) {
      alert("Destination and Origin can not be same !");
      validate = false;
    }
    if (new Date(deptDate).getTime() < new Date().getTime()) {
      alert("Journey Date should be greater or equal to Today's date !");
      validate = false;
    }
    return validate;
  }

  const handleSubmit = () => {
    if (!isEmpty(form) && isValidCity() && (isDepartValid() || isReturnValid()))
      dispatch({ type: 'SEARCH', payload: { form } });
    else
      alert("Plese input mandatory fields.");
  }

  return <div className="SearchFormWrapper">
    <SearchFormWrapper>
      <PlaceSelectionWrapper>
        <FormItemWrapper>
          <label> Departure </label>
          <Input onChange={handleDepartureChange} size='large' required={true} type='text'></Input>
        </FormItemWrapper>
        <FormItemWrapper>
          <label> Destination </label>
          <Input onChange={handleDestinationChange} size='large' required={true} type='text'></Input>
        </FormItemWrapper>
      </PlaceSelectionWrapper>

      <DateSelectionWrapper>
        <FormItemWrapper>
          <label> Departure Date </label>
          <Input onChange={handleDeptDateChange} required={true} type='date'></Input>
        </FormItemWrapper>
        <FormItemWrapper>
          <label> Return Date </label>
          <Input onChange={handleReturnDateChange} required={true} type='date'></Input>
        </FormItemWrapper>
        <FormItemWrapper>
          <label> Travelers </label>
          <Input onChange={handleTravlerChange} required={true} type='number'></Input>
        </FormItemWrapper>
        <FormItemWrapper>
          <label> Class </label>
          <Input onChange={handleClassChange} required={true} type='text'></Input>
        </FormItemWrapper>
      </DateSelectionWrapper>

      <Button size='large' onClick={handleSubmit} color='green'>Search</Button>
    </SearchFormWrapper>
  </div>
};

SearchForm.propTypes = {
  // bla: PropTypes.string,
};

SearchForm.defaultProps = {
  // bla: 'test',
};

export default SearchForm;
