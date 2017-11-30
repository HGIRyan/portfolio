import React, { Component } from 'react';
import './MyWork.css';

import ProjectTiles from './ProjectTiles/ProjectTiles'


class MyWork extends Component {

    render() {
        return (
            <div className='MyWork-Container'>
            MyWork
            <div className='App-ProjectTiles' > <ProjectTiles/> </div>
            </div>
        );
    }
}

export default MyWork;