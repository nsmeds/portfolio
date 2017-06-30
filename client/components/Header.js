import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Header = props => {

    return (
        <header>

            <nav className="upper-nav">
                <section className="header-headings">
                    <h1>Niilo Smeds</h1>
                    <h3>Full-Stack JavaScript Developer</h3>
                </section>
                <ul className="icons">
                    <li className="tab" data-id="menu" id="menuburger"><a href="#"><img src="vendor/images/menuburger.svg" alt="Menu" /></a></li>
                    <li className="tab"><a href="https://github.com/nsmeds"><img src="vendor/images/github.svg" alt="Github" /></a></li>
                    <li className="tab"><a href="https://www.linkedin.com/in/niilo-smeds-4a0605120"><img src="vendor/images/linkedin.svg" alt="LinkedIn" /></a></li>
                </ul>
            </nav>
            <nav className="lower-nav">
                <ul className="menu-items">
                    <li className="tab" data-tab="projects"><Link to="/">Portfolio</Link></li>
                    <li className="tab" data-tab="about"><Link to="/about">About</Link></li>
                    <li className="tab" data-tab="repos"><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;