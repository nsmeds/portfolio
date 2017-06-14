import React from 'react';
import Projects from './Projects';

const Portfolio = props => {

    console.log('props from portfolio', props);

    let data = props.data;
    let currentProject = props.data[0];

    return (

        <div className='main-content'>
            <ul>
                <Projects {...currentProject}/>
            </ul>
        </div>
    )
}

export default Portfolio;