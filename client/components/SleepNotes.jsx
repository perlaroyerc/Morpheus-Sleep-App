
import React from 'react';
import Select from 'react-select';
import '../App.scss';


  const options= [
    { value: 'Stayed up late', label: 'Stayed up late'},  
    { value: 'Stressfull day', label: 'Stressfull day'},
    { value: 'Drank alcohol', label: 'Drank alcohol'},
    { value: 'Drank coffe', label: 'Drank coffe'},
    { value: 'Ate late', label: 'Ate late'},
  ];

const handleClick = () => {
  
}

const NotesDisplay = (props) => {
  console.log(props)

  return (
    <div> <h3 className="notes"> Daily Notes</h3>
    <div style ={{width:'10rem'}} >
    <Select className="selectBar"
      options = {options}
    />
    </div>
    

    <button onClick={handleClick()}> Done </button>
    
     </div>
    
  )

}

       
export default NotesDisplay;

 
//add this to my database 
//over the long term we would see a pattern in the habits. 

