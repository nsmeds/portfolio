import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header />
                <About />
                <Projects />
                <Contact />
            </div>
        )
    }
}