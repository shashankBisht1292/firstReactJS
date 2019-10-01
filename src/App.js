import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  render() {
    const name = 'somil';
    return (
      <div className="App">
        <h1>Hi {name}, i am a react app !</h1>
        <p>this is really working</p>
        <Person name='Max' age='10'/>
        <Person name='Manu' age='30'/>
        <Person name='Steph' age='60'>Pro in basketball</Person>
        <Person name='somil' age='20'/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, 'h1', 'Hi, I\'m areact app!!!');
  }
}

export default App;
