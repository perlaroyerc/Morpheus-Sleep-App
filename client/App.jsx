
import React from 'react';
import { render } from 'react-dom';
import MainContainer from './components/MainContainer'; //jsx
import './App.scss';



const App = props => {

 
    return (
      <div>
        <div className='root'></div>
      <h1 id= 'header'> MORPHEUS </h1>
      <MainContainer />
    </div>
    )
      
};
  
  export default App;

  // function App () {
  
//   return (

//   <div className = "App">
     
//   <h1>MORPHEUS</h1>
//   <h3> A sleeping App</h3>
  
//   </div>

// )
// }

//Is the jsx necessary??
  

  