import React, { Component } from 'react';
import './App.css';
import TypeWriter from './components/TypeWriter/TypeWriter'
import jump from 'jump.js'

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className='top'>
          <TypeWriter />
          <button className='jump-button' onClick={_ => { jump('.level-two') }} > go to level two</button>

        </div>
        <div className='level-two'>
        level-two <br/>
          <button onClick={_ => { jump('.level-three') }} > go to level three </button>
        </div>
        <div className='level-three'>
        level-three<br/>
        <button onClick={_ => { jump('.footer-level') }} > go to level three </button>
        </div>
        <div className='footer-level'>
        bottom of page <br/>
        <button onClick={_ => { jump('.top') }} > click here to go back to top </button>
        

        </div>
      </div>
    );
  }
}

export default App;
