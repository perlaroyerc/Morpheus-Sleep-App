
//sleep- alarm timer
//sleep notes
import {Component} from 'react';
import React from 'react';
import AlarmClock from './AlarmClock.jsx';
import Notes from './SleepNotes.jsx';


class RedPillContainer extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        <div className='left box'>
        <h1> Red Pill</h1>
        <AlarmClock /> 
        <NotesDisplay />

        </div>
    }
};

export default RedPillContainer;