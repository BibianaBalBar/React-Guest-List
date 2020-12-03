import React from 'react';
import classes from "./Form.css";
import { v4 as uuidv4 } from 'uuid';

const Form = ({ persons, setPersons, nameInput, setNameInput, companyInput, setCompanyInput }) => {
  const guestInputHandler = (e) => {
    setNameInput(e.target.value);
  }
  const guestCompanyInputHandler = (e) => {
    setCompanyInput(e.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    setPersons([...persons, { name: nameInput, company: companyInput, id: uuidv4() }]);
    setNameInput('');
    setCompanyInput('');
  };

  return (
      <form  className={classes.formContainer} onSubmit={submitHandler}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={nameInput}
          onChange={guestInputHandler} />
        <br/>
        <label htmlFor="company">Company: </label>
        <input
          type="text"
          name="company"
          id="company"
          value={companyInput}
          onChange={guestCompanyInputHandler} />
        <br/>
        <button>Submit</button>
      </form>
    );
};


export default Form