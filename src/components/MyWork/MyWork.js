import React, { Component } from 'react';
import './MyWork.css';
import Carousel from '../Carousel/Carousel'
import ProjectTiles from './ProjectTiles/ProjectTiles'


class MyWork extends Component {
    constructor() {
        super();
        this.state = {
            handleChange: '0',
            first: false,
            slideIndex: '0',
            purelySupport: false,
            employeeEngage: true
        }
        this.settingState = this.settingState.bind(this);
    }

    componentDidMount() {

        let elmNext = document.getElementsByClassName('slick-next')[0]
        this.setState({
            slideIndex: 0
        })
        
        elmNext.addEventListener('click', _ => {
            this.setState({
                slideIndex: document.getElementsByClassName('slick-slide slick-active img_container')[0].attributes['data-index'].value
            })
            console.log(this.state.slideIndex)
        })

        let elmprev = document.getElementsByClassName('slick-prev')[0]
        elmprev.addEventListener('click', _ => {
            this.setState({
                slideIndex: document.getElementsByClassName('slick-slide slick-active img_container')[0].attributes['data-index'].value
            })
        })

    }
    settingState() {
        this.setState({
            slideIndex: document.getElementsByClassName('slick-slide slick-active img_container')[0].attributes['data-index'].value
        })
    }

    // whichProject(){
    //     if(this.state.slideIndex == 1 || 2){
    //         employeeEngage
    //     }
    //     this.setState({

    //     })
    // }
    render() {
        return (
            <div className='MyWork-Container'>
                {/* <div className='project-tile'> */}
                {/* <ProjectTiles/> */}
                {/* </div> */}
                <div className='my-work-carousel'>
                    <Carousel />
                </div>
                {/* <h3> {this.state.slideIndex == 0 ? 'Employee Shop' : null}</h3> */}
                {this.state.slideIndex == 1 || this.state.slideIndex == 2 ?
                    <div className='info'>
                        <h1>Purely Support</h1>
                        <h3>Built With</h3>
                        <h4>ReactJS | NodeJS | Redux | Sass | Express | PostgreSQL</h4>
                        <h4> | Material-UI | Quill | Auth0</h4>
                        <h2>A social networking platform to bring people who suffer from chronic illnesses together to organize meet ups and create social groups for support. </h2>
                        <h4><a href='http://PurelySupport.com' target='_blank' > PurelySupport.com </a></h4>

                    </div> :

                    <div className='info'>
                        <h1>Employee Engage</h1>
                        <h3>Built With</h3>
                        <h4>ReactJS | NodeJS | Redux | Express | PostgreSQL |</h4>
                         <h4> CSS | HTML5</h4>
                        <h2>Web app to enable management to engage with their workforce through a company social network</h2>
                        <h4><a href='http://Michaelis.MyNextDev.com' target='_blank' > Michaelis.MyNextDev.com </a></h4>

                    </div>

                }
            </div>
        );
    }
}

export default MyWork;