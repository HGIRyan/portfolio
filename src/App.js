import React, { Component } from 'react';
import './App.css';
import TypeWriter from './components/TypeWriter'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className='top'> 
        <TypeWriter/>
        </div>
        <div className='next'>       
        </div>
      </div>
    );
  }
}

export default App;
