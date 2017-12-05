import React, { Component } from 'react';
import './ProjectTiles.css';
import dashImg from '../../../Assets/img/employee-dash.svg';
import shopImg from '../../../Assets/img/employee-shop.svg';
import laptopImg from '../../../Assets/img/laptop.svg';
import Slider from 'react-slick'


class ProjectTiles extends Component {
    constructor() {
        super();
        this.state = {
        }
    }


    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        };

        return (
            <div className='ProjectTiles-Container'>
                <div className='img1'>
                </div>
                <div className='tile-text-area'>
                    <div className='project-title'> Employee Engagment</div>
                    <div className='project-tech'> tech | I | used | for | this | project</div>
                    <div className='project-link'> <a href="http://michaelis.mynextdev.com/#/dashboard" target="_blank">Michaelis.MyNextDev.com</a> </div>
                </div>

{/* 
                <laptopframefront>
                <div className='laptopframeback'>
                    <Slider {...settings}>
                        <div className='img1 laptop-slider'></div>
                        <div className='img2 laptop-slider'></div>

                    </Slider>
                    <img className='laptoprame' src={laptopImg} alt="laptop frame" />
                </div>
                </laptopframefront> */}
            </div>
        );
    }
}

export default ProjectTiles;