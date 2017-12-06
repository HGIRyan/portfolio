import React, { Component } from 'react';
import jump from 'jump.js'
import './App.css';

import TypeWriter from './components/TypeWriter/TypeWriter'
import Expertise from './components/Expertise/Expertise'
import Showcase from './components/Showcase/Showcase'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import FaIconPack from 'react-icons/lib/fa'
import FaAngleDoubleDown from 'react-icons/lib/fa/angle-double-down'
// import FontAwesome from 'react-icons/lib/fa/angle-double-down'
// FaAngleDoubleDown


class App extends Component {


  render() {
    return (
      <div className="App">
        <div className='top'> <TypeWriter /> 
        <div className='jump-skills-container'>
            <button className='jump-button-skills' onClick={_ => { jump('.Expertise-Container') }} > Learn more about what I do </button>
            <h2><FaAngleDoubleDown onClick={_ => { jump('.Expertise-Container') }}/></h2>
          
            </div>
            </div>
        <div className='groups'>
          {/* {/* <div className='App-Showcase' ><Showcase /></div> */}
          <div className='App-Expertise' ><Expertise /></div>
          <div className='App-MyWork' ><MyWork /></div>
          <div className='App-Contact' ><Contact /></div>
          <div className='App-Footer' ><Footer /></div>
        </div>
      </div>
    );
  }
}

export default App;
