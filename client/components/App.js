import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
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
                            <Route render={({location}) => (
                                    <CSSTransitionGroup
                                        transitionName="fade"
                                        transitionEnterTimeout={300}
                                        transitionLeaveTimeout={300}
                                    >
                                        <Switch key={location.key} location={location}>
                                            <Route path="/about" component={About} />
                                            <Route exact path="/" render={PortfolioRoute} />
                                            <Route path="/contact" component={Contact} />
                                        </Switch>

                                    </CSSTransitionGroup>
                            )}/>


                    </div>
            </Router>
        )
    }
}