import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import axios from 'axios';
import data from '../data/projectData.json';

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            projects: {data},
        };
    }

    componentDidMount() {
        console.log('this.state.projects', this.state.projects);
        // this.getProjectData();
    }

    // getProjectData = () => {
    //     console.log(data);
    //     axios.get(data)
    //         .then(response => {
    //             // this.setState({
    //             //     projects: response.data
    //             // })
    //             console.log('response', response);
    //         })
    // }

    render() {
        return (
            <div>
                <Header />
                <About />
                <Portfolio {...this.state.projects} />
                <Contact />
            </div>
        )
    }
}