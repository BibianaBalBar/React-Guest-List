import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: "1", name: "Abo", age: 32 },
      { id: "2", name: "Pesta", age: 2 },
      { id: "3", name: "Buda", age: 2 },
    ],
    otherState: "some other state",
    showPersons: false,
    showCockpit: true,
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  // To change name
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  //
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  //
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };


  render() {
    console.log("[App.js] render")
    let persons = null;    

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
          persons={this.state.persons}  
          clicked={this.deletePersonHandler} 
          changed={this.nameChangedHandler}
          />          
        </div>
      );    
    }    

    return (      
        <div className={classes.App}>   
          <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}>
            Remove Cockpit
          </button>
          {this.state.showCockpit ? (
            <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons} 
            persons={this.state.persons}
            clicked={this.togglePersonsHandler} />       
          ) : null}          
          {persons}
        </div>
      
    );
  }
}

export default App;
