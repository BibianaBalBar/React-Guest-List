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
  switchNameHandler = () => {
    // DON'T DO THIS this.state.persons[0].name = "Zé"
    this.setState({
      persons: [
        { name: "Zé Pedro", age: 32 },
        { name: "Pesta", age: 2 },
        { name: "Buda", age: 2.2 },
      ],
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          My Hobbies: Gaming
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
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
