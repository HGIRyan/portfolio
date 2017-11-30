import React, { Component } from 'react';
import './Footer.css';
import FaGithub from 'react-icons/lib/fa/github'
import FaLinkedinSquare from  'react-icons/lib/fa/linkedin-square';

class Footer extends Component {

    render() {
        return (
            <div className='Footer-Container'>
            Handmade by me © 2017.<br/>


<a href='https://www.linkedin.com/in/michaeljhutchison' target="blank"><FaLinkedinSquare  size={70} /></a>
<a href='https://github.com/mhutchison90' target="blank"><FaGithub  size={70} /></a>
            </div>
        );
    }
}

export default Footer;