import React, { Component } from 'react';

import './App.css';

import TypeWriter from './components/TypeWriter/TypeWriter'
import Expertise from './components/Expertise/Expertise'
import Showcase from './components/Showcase/Showcase'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


class App extends Component {


  render() {
    return (
      <div className="App">
        <div className='top'> <TypeWriter /> </div>
        <groups>
          {/* <div className='App-Showcase' ><Showcase /></div>
          <div className='App-MyWork' ><MyWork /></div> */}
          <div className='App-Expertise' ><Expertise /></div>
          <div className='App-Contact' ><Contact /></div>
          <div className='App-Footer' ><Footer /></div>
        </groups>
      </div>
    );
  }
}

export default App;
