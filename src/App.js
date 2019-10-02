import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 16},
      {name: 'Steph', age: 34}
    ],
    otherState: 'some other state',
    showData: false
  };

  switchNameHandler = (newName) => {
    //console.log('was clicked');
    this.setState({
      persons: [
        {name: newName, age: 8},
        {name: 'Chnaged-Manu', age: 6},
        {name: 'Chnaged-Steph', age: 60},
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 16},
        {name: 'Steph', age: 34}
      ]
    });
  }

  togglePerson = () => {
    const personData = this.state.showData;
    this.setState({
      showData: !personData
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'ponter'
    };

    let persons = null;
    if(this.state.showData) {
      persons = (
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'shashank')}
            changed={this.nameChangedHandler}> I am a basketball pro </Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app !</h1>
        <p>this is really working</p>
        <button 
          style={style} 
          onClick={this.togglePerson}>Switch Name</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, 'h1', 'Hi, I\'m areact app!!!');
  }
}

export default App;
