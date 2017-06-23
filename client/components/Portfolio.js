import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import Projects from './Projects';

class Portfolio extends React.Component {


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
            <div className='portfolio-wrap'>
                <div className='main-content portfolio-projects'>
                    {/*<div className='project-nav'>
                        <h4>Recent Projects</h4>
                    </div>*/}
                    <button className='project-nav-button' name='prev' onClick={this.handleClick} disabled={this.currentIndex > 0 ? false : true}>&lang;</button>
                    <ul>
                        <CSSTransitionGroup transitionName="fade" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                            <Projects key={this.state.currentProject.key} {...this.state.currentProject}/>
                        </CSSTransitionGroup>
                    </ul>
                    <button className='project-nav-button' name='next' onClick={this.handleClick} disabled={this.currentIndex < this.props.data.length -1 ? false : true}>&rang;</button>
                </div>
            </div>
        )
    }
}

export default Portfolio;