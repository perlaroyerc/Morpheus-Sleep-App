
import React from 'react';
import Select from 'react-select';

  const notes = [
    { value: 'Stayed up late', label: 'Stayed up late'},  
    { value: 'Stressfull day', label: 'Stressfull day'},
    { value: 'Drank alcohol', label: 'Drank alcohol'},
    { value: 'Drank coffe', label: 'Drank coffe'},
    { value: 'Ate late', label: 'Ate late'},
  ]


const NotesDisplay = () => (
//   <Button disabled onClick={sayHello}>
//   Disabled Button
// </Button>
  <Select notes = {notes}/>
)
       
export default NotesDisplay;

 

//over the long term we would see a pattern in the habits. 

