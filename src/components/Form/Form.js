import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ persons, setPersons, nameInput, setNameInput}) => {
  const guestInputHandler = (e) => {
    setNameInput(e.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    setPersons([...persons, { name: nameInput, id: uuidv4() }]);
    setNameInput('');
  }

  return (
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={nameInput}
          onChange={guestInputHandler} />
        {/* <label htmlFor="company">Company</label>
        <input
          type="text"
          name="company"
          id="company"
          value={company}
          onChange={this.handleChange} />
          <input type="button" value="Submit" onClick={this.submitForm} /> */}
        <button>Submit</button>
      </form>
    );
};


export default Form