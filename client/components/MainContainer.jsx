import React, {Component} from 'react';
import BluePillContainer from './BluePillContainer.jsx';
import RedPillContainer from './RedPillContainer.jsx';
import '../App.scss';

//hold red pill and blue pill components and child components
class MainContainer extends Component {
 
    render() {
        return (
            <div className ='mainBox'>
          <h1> <RedPillContainer /></h1>  
          <h1> <BluePillContainer /></h1>  

        </div>
        )
    }
};

export default MainContainer;