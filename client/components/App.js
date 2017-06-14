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
        const PortfolioRoute = (props) => {
            return (
                <Portfolio {...this.state.projects} />
            )
        }
        return (
            <Router>
                <div>
                    <Header />
                    <Route exact path="/" component={About} />
                    <Route path="/portfolio" render={PortfolioRoute} />
                    <Route path="/contact" component={Contact} />
                </div>
            </Router>
        )
    }
}