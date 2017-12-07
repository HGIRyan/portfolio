import React, { Component } from 'react';
import './Nav.css';
import jump from 'jump.js'

class Nav extends Component {

    render() {
        return (
            <div className='Nav-Container'>

                <p><div id='navButton' onClick={_ => { jump('.Expertise-Container') }} > Skills </div></p>
                <p><div id='navButton' onClick={_ => { jump('.MyWork-Container') }} > My Work </div></p>
                <p><div id='navButton' onClick={_ => { jump('.Contact-Container') }} > Contact </div></p>
            </div >
        );
    }
}

export default Nav;