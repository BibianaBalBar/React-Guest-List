import React, {useState} from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Form from "../components/Form/Form";

function App() {
  //State
  const [nameInput, setNameInput] = useState('');
  const [persons, setPersons] = useState([]);

  return (
    <div>
      <h1>Guests List</h1>
      <Form nameInput={nameInput} setNameInput={setNameInput} persons={persons} setPersons={setPersons} />
      <Persons persons={persons} setPersons={setPersons} />
    </div>
  );

  // getDerivedStateFromProps(props, state) {
  //   console.log('[App.js] getDerivedStateFromProps', props);
  //   return state;
  // }

  // componentDidMount() {
  //   console.log('[App.js] componentDidMount');
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[App.js] shouldComponentUpdate');
  //   return true;
  // }

  // componentDidUpdate() {
  //   console.log('[App.js] componentDidUpdate');
  // }

  
}

export default App;
