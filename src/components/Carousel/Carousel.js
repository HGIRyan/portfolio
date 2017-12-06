import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { Carousel } from 'react-responsive-carousel';
import laptop from '../../Assets/img/laptop.svg';
import dashImg from '../../Assets/img/employee-dash.svg';
import shopImg from '../../Assets/img/employee-shop.svg';
import psAccount from '../../Assets/img/account.gif'
import psProfile from '../../Assets/img/profile.gif'
import './Carousel.css'


// var React = require('react');

import Slider from 'react-slick';

export default class SimpleSlider extends Component {
    
    render(){
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
            <div className='laptop-parent'>
          <img className='laptop' src={laptop} alt='laptop'/>
                <Slider className='slider' {...settings}>
                   <div className='img_container'> <img className='slider-image-index' src={shopImg} alt='Shop Image'/></div>
                   <div className='img_container'> <img className='slider-image-index' src={dashImg} alt='dash Image'/></div> 
                   <div className='img_container'> <img className='slider-gif' src={psAccount} alt='dash Image'/></div> 
                   <div className='img_container'> <img className='slider-gif' src={psProfile} alt='dash Image'/></div> 
                </Slider>
            </div>
        );  
    }
}