import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

  static getDerivedStateFromProps(props, state) {
    console.log('[Persons.js] getDerivedStateFromProps props-->', props);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
  }

  componentDidUpdate(){
    console.log('[Persons.js] componentDidUpdate');
  }

  render() {
    return this.props.persons.map((person, indx) => {
        return (
          <Person key={person.id}
            click= {() => this.props.clicked(indx)}
            changed= {(event) => this.props.changed(event, indx)}
            name={person.name} 
            age={person.age}/>
        )
    });
  }
}

export default Persons;