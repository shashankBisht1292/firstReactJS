import React, { useEffect } from 'react';
import classes from './cockpit.css'

const cockpit = (props) => {

    useEffect(() => {
        console.log('[cockpit.js] useEffect');
        //http request...
        setTimeout(()=>{
            alert('saved data in cloud');
        }, 1000);

        return () => {
            console.log('useEffect cleanup work, executes like componentWillUnmount');
        }
    }, []);

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red;
    }
   
    if(props.persons.length <= 2){
        assignedClasses.push(classes.red);
    } else {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className= {props.persons.length <3 ? assignedClasses : null}>this is really working</p>
            <button 
            className={btnClass} 
            onClick={props.clicked}>Switch Name</button>
        </div>
    );
};

export default cockpit;