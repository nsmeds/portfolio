import React from 'react';

const Projects = props => {
    return (
        <div className="main-content">
            <h2>Recent Projects</h2>
            <ul>
                <li>
                    <h4><a href="https://github.com/nsmeds/riverbed-server">Riverbed</a></h4>
                    <p className="description">An online publishing platform designed and built for an upcoming literary magazine. I essentially created a JavaScript-based content management system, utilizing ReactJS on the <a href="https://github.com/nsmeds/riverbed-server">front end</a> and making API calls to a MongoDB-based <a href="https://github.com/nsmeds/riverbed-server">back end</a> powered by Node/Express.</p>
                    <p>For content submission and editing, I implemented <a href="https://github.com/facebook/draft-js">Draft.js</a>, an exciting rich text editor framework built by the React team.</p>
                    <a href="https://github.com/nsmeds/riverbed-server">Source on Github</a> |
                    <a href="https://riverbed.herokuapp.com/">Demo on Heroku</a>
                </li>
                <li>
                    <h4><a href="https://github.com/Portamento-development/">Portamento</a></h4>
                    <p className="description">A browser-based synthesizer and sequencer with social components. Users can instantly create and edit sounds and loops, share their creations with others, and rate their favorites. Built with AngularJS, MongoDB, Express, Node and <a href="https://tonejs.github.io/">Tone.js</a>, a sound generation tool built on top of the Web Audio API.</p>
                    <a href="https://github.com/Portamento-development/">Source on Github</a> |
                    <a href="https://portamento.herokuapp.com/">Demo on Heroku</a>
                    </li>
                <li>
                    <h4><a href="https://github.com/nsmeds/CacheMoneyApp">Cache Money DB</a></h4>
                    <p className="description">A fantasy stock-trading single-page app, built with an Express server with RESTful routing and MongoDB. Users can create a stock portfolio and compete with other users to buy and sell most profitably. Stock data is refreshed every 15 minutes via the Yahoo Finance API.</p>
                    <a href="https://github.com/nsmeds/CacheMoneyApp">Source on Github</a> |
                    <a href="http://cachemoneydb.herokuapp.com/">Demo on Heroku</a>
                </li>
                <li>
                    <h4><a href="https://github.com/Words-for-Music/words-for-music">Words for Music</a></h4>
                    <p className="description">A lyric-search tool, using Node.js REST services and the Genius and iTunes APIs. Users search for songs by typing any string of lyrics. The app returns a list of songs matching those lyrics, along with audio previews, artist photos and iTunes links.</p>
                    <a href="https://github.com/Words-for-Music/words-for-music">Source on Github</a> |
                    <a href="https://words-for-music.herokuapp.com/">Demo on Heroku</a>
                </li>
                <li>
                    <h4><a href="https://github.com/brekt/sudoku">Sudoku Solver</a></h4>
                    <p className="description">A fast, elegant Sudoku solver written in vanilla JavaScript, CSS3 and HTML5. It outperforms most other Sudoku solvers found online, and the minimalist, uncluttered interface is both pleasant and performant.</p>
                    <a href="https://github.com/brekt/sudoku">Source on Github</a> |
                    <a href="http://45.55.207.50/">Live site</a>
                    </li>
                <li>
                    <h4><a href="https://github.com/nsmeds/90s-quiz">90s Indie Rock Quiz</a></h4>
                    <p className="description">An interactive quiz written in vanilla JavaScript, CSS3 and HTML5. User answers and scores are persisted to localStorage for continued play after browser refresh.</p>
                    <a href="https://github.com/nsmeds/90s-quiz">Source on Github</a> |
                    <a href="http://nsmeds.github.io/90s-quiz/">Live site</a>
                </li>
            </ul>
        </div>
    )
}

export default Projects;