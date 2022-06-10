
import React from 'react';
import { render } from 'react-dom';
import MainContainer from './components/MainContainer'; 
import Nav from './NavBar';
import './App.scss';



const App = props => {
    return (
      <div>
        <div className='main'></div>
      <h1 className='header' id= 'header'> MORPHEUS </h1>
      <Nav/>
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
  

  