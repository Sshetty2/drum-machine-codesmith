import React,   { Component } from 'react';
import Button from './button.js';
import Sounds from '../assets/sounds.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      sounds: Object.keys(Sounds)
    }
    this.playSound = this.playSound.bind(this);
  }

  playSound(eventObj) {
    //code to be run when click event is fired goes below this line!

  }

  attachSound()

  render(){

    return (
      <div className='button-container'>
      {/* Components that need to be returned from App go below here ! */}
      { {
        <Box playSound />
      }}
      
      </div>
    );
  }
}

export default App;
