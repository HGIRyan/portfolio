import React, { Component } from 'react';
import './Nav.css';
import jump from 'jump.js'

class Nav extends Component {

    render() {
        return (
            <div className='Nav-Container'>

                <div id='navButton' onClick={_ => { jump('.Expertise-Container') }} ><p> Skills </p></div>
                <div id='navButton' onClick={_ => { jump('.MyWork-Container') }} ><p> Work </p></div>
                <div id='navButton' onClick={_ => { jump('.Contact-Container') }} ><p> Contact </p></div>
            </div >
        );
    }
}

export default Nav;