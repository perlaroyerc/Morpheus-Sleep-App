
import React from 'react';
import AlarmClock from './AlarmClock.jsx';
import NotesDisplay from './SleepNotes';
import '../App.scss';

class RedPillContainer extends React.Component {
  
    render() {
      return (
        <div className='leftBox'>
        <h1 id= 'redPill'>Red Pill</h1>

        <AlarmClock /> 
        <NotesDisplay />

        </div>
      )
    }
};

export default RedPillContainer;