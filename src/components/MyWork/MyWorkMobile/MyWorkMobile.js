import React, { Component } from 'react';
import './MyWorkMobile.css';
// import Carousel from '../Carousel/Carousel'
// import ProjectTiles from './ProjectTiles/ProjectTiles'
import dashImg from '../../../Assets/img/employee-dash.svg';
import shopImg from '../../../Assets/img/employee-shop.svg';
import psAccount from '../../../Assets/img/account.gif'
import psProfile from '../../../Assets/img/profile.gif'


class MyWorkMobile extends Component {
    render() {
        return (
            <div className='MyWorkMobile-Container'>
                <div className='project-details'>
                    <h1>Purely Support</h1>
                <hr />
                    <div className='project-images' >
                        <img src={psAccount} />
                        <img src={psProfile} />
                    </div>
                    <div className='project-info'>
                        <h3>Built With</h3>
                        <h4>ReactJS | NodeJS | Redux | Sass |</h4>
                        <h4>    Express | PostgreSQL | Material-UI | </h4>
                            <h4>Quill | Auth0</h4>
                        <h2>A social networking platform to bring people who suffer from chronic illnesses together to organize meet ups and create social groups for support. </h2>
                        <h4><a href='http://PurelySupport.com' target='_blank' > PurelySupport.com </a></h4>

                    </div>
                </div>
                <div className='project-details'>
                    <h1>Employee Engage</h1>
                <hr />

                    <div className='project-images' >
                        <img src={dashImg} />
                        <img src={shopImg} />
                    </div>
                    <div className='project-info'>
                        <h3>Built With</h3>
                        <h4>ReactJS | NodeJS | PostgreSQL | </h4> 
                        <h4> Express | Redux | CSS | HTML5</h4>
                        <h2>Web app to enable management to engage with their workforce through a company social network</h2>
                        <h4><a href='http://Michaelis.MyNextDev.com/#/dashboard' target='_blank' > Michaelis.MyNextDev.com </a></h4>

                    </div>
                </div>

            </div>
        );
    }
}

export default MyWorkMobile;