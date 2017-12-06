import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {

    render() {
        return (
            <div className='Contact-Container'>
                <header>Want to learn more about me?</header>
                <div>Contact me at 
                {<a href="mailto:Michael@MyNextDev.com?Subject=Hi%I%saw%your%website%tell%me%more" target="_top"> Michael@MyNextDev.com</a>}
                     </div>

            </div>
        );
    }
}

export default Contact;

