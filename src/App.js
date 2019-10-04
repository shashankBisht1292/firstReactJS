import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {id: 'sadw', name: 'Max', age: 28},
      {id: 'aasd', name: 'Manu', age: 16},
      {id: 'wvxc', name: 'Steph', age: 34}
    ],
    otherState: 'some other state',
    showData: false
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, personIndx) => {
    //const personIndx = this.state.persons.findIndex((person) => person.id === id);
    const person = {
      ...this.state.persons[personIndx]
    };
    person.name = event.target.value;    
    const persons = [...this.state.persons];
    persons[personIndx] = person;
    this.setState({persons: persons});
  }

  togglePerson = () => {
    const personData = this.state.showData;
    this.setState({
      showData: !personData
    })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'ponter'
    };

    let persons = null;
    if(this.state.showData) {
      persons = (
        <div>
          {this.state.persons.map((person, indx) => {
              return (
                <Person key={person.id}
                  click= {() => this.deletePersonHandler(indx)}
                  changed= {(event) => this.nameChangedHandler(event, indx)}
                  name={person.name} 
                  age={person.age}/>
              )
          })}
        </div>
      )
      style.backgroundColor = 'red';
    }

    let classes = ['red', 'bold']. join(' ');

    return (
      <div className="App">
        <h1>Hi, I'm a react app !</h1>
        <p className= {this.state.persons.length <3 ? classes : null}>this is really working</p>
        <button 
          style={style} 
          onClick={this.togglePerson}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
