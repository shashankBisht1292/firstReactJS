import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    console.log('props-->', props);
    this.state = {
      persons: [
        {id: 'sadw', name: 'Max', age: 28},
        {id: 'aasd', name: 'Manu', age: 16},
        {id: 'wvxc', name: 'Steph', age: 34}
      ],
      otherState: 'some other state',
      showPersons: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps props-->', props);
    return state;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, personIndx) => {
    const person = {
      ...this.state.persons[personIndx]
    };
    person.name = event.target.value;    
    const persons = [...this.state.persons];
    persons[personIndx] = person;
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const personData = this.state.showPersons;
    this.setState({
      showPersons: !personData
    })
  }

  render() {
    console.log('render ');
    let persons = null;
    
    if(this.state.showPersons) {
      persons = 
          <Persons persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
