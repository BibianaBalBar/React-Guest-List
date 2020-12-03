import React, {useState} from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Form from "../components/Form/Form";

function App() {
  //State
  const [nameInput, setNameInput] = useState('');
  const [companyInput, setCompanyInput] = useState('');
  const [persons, setPersons] = useState([]);

  return (
    <div className={classes.App}>
      <h1>GUEST LIST</h1> 
           
        <Form nameInput={nameInput} setNameInput={setNameInput} companyInput={companyInput} setCompanyInput={setCompanyInput} persons={persons} setPersons={setPersons} />
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
