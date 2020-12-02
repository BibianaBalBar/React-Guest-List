import React from "react";
import classes from "./Person.css";

const Person = ( {nameInput, person, persons, setPersons} ) => {  
  const deletePerson = () => {
    setPersons(persons.filter((state) => state.id !== person.id));
  };
  
  return (        
    <div className={classes.Person}>
      <h3>{person.name}</h3>
      {/* <h4>{company}</h4> */}
      <button onClick={deletePerson}>Check</button> 
    </div>
  );
  
};

export default Person;
