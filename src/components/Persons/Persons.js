import React from 'react';
import Person from './Person/Person';

const Persons = ({ name, persons, setPersons}) => {

  return (              
    <div>
      {persons.map((person) => (
        <Person 
          setPersons={setPersons}
          name={name}
          person={person}
          persons={persons}
          key={person.id}
        />
      ))}
    </div>              
  );    
};


export default Persons;
