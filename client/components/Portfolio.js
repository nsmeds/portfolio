import React from 'react';
import Projects from './Projects';

class Portfolio extends React.Component {

    // console.log('props from portfolio', props);

    constructor(props) {
        super(props);
        this.currentIndex = 0
        this.state = {
            currentProject: props.data[this.currentIndex]
        }
    }

    handleClick = event => {
        let name = event.target.name;
        this.currentIndex += (name === 'next') ? 1 : -1;
        this.setState({
            currentProject: this.props.data[this.currentIndex]
        });
    }

    render() {
        return (
            <div className='main-content'>
                <div className='project-nav'>
                    <button name='prev' onClick={this.handleClick} disabled={this.currentIndex > 0 ? false : true}>&lang;</button>
                    <h4>Recent Projects</h4>
                    <button name='next' onClick={this.handleClick} disabled={this.currentIndex < this.props.data.length -1 ? false : true}>&rang;</button>
                </div>
                <ul>
                    <Projects {...this.state.currentProject}/>
                </ul>
            </div>
        )
    }
}

export default Portfolio;