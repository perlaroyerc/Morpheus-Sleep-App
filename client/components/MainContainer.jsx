import React, {Component} from 'react';
import BluePillContainer from './BluePillContainer.jsx';
import RedPillContainer from './RedPillContainer.jsx';


//hold red pill and blue pill components and child components
class MainContainer extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        <div className ='main box'>
            <RedPillContainer />
            <BluePillContainer />

        </div>
    }
};

export default MainContainer;