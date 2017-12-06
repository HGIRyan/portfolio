import React, { Component } from 'react';
import './Expertise.css';
import angular from '../../Assets/svg/angular.svg'
import git from '../../Assets/svg/git.svg'
import nodejs from '../../Assets/svg/nodejs.svg'
import postgresql from '../../Assets/svg/postgresql.svg'
import react from '../../Assets/svg/react.svg'



class Expertise extends Component {

    render() {
        return (
            <div className='Expertise-Container'>
                <div className='expertise-items'>
                    <div>
                        < img id='react' src={react} alt='React.JS Icon' title='React.JS Icon' />
                        <h2>React.JS </h2>
                    </div>
                    <div>
                        < img id='nodejs' src={nodejs} alt='Node.JS Icon' title='Node.JS Icon' />
                        <h2>Node.JS</h2>
                    </div>
                    <div>
                        < img id='postgresql' src={postgresql} alt='PostgreSQL Icon' title='PostgreSQL Icon' />
                        <h2>PostgreSQL</h2>
                    </div>
                    <div>
                        < img id='angular' src={angular} alt='Angular.JS Icon' title='Angular.JS Icon' />
                        <h2>Angular.JS</h2>
                    </div>
                    <div>
                        < img id='git' src={git} alt='GitHub Icon' title='GitHub Icon' />
                        <h2>GitHub</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Expertise;
