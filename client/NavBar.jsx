import React from 'react';
import { render } from 'react-dom';
import './App.scss';


const Nav = props => {
    return (
      <div>
        <div className='navBar'>
       <h3 className='home' > Home </h3> 
       <h3 className='about' > About </h3>
        <h3 className='userLogin' > User Login </h3>
       <h3 className='signUp' > Sign Up </h3>
       </div>
    </div>
    )
      
};
  
export default Nav;