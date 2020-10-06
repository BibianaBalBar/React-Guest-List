import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Abo", age: 32 },
      { name: "Pesta", age: 2 },
      { name: "Buda", age: 2 },
    ],
  };

  // Button to switch name
  switchNameHandler = (newName) => {
    // DON'T DO THIS this.state.persons[0].name = "Zé"
    this.setState({
      persons: [
        { name: newName, age: 32 },
        { name: "Pesta", age: 2 },
        { name: "Buda", age: 2.2 },
      ],
    });
  };

  // To change name
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Abo", age: 32 },
        { name: event.target.value, age: 2 },
        { name: "Buda", age: 2.2 },
      ],
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <button onClick={() => this.switchNameHandler("Abo!!!!")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Max!")}
        >
          My Hobbies: Gaming
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
