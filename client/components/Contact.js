import React from 'react';
import Mailto from 'react-mailto';

const Contact = props => {
    return (
        <div className="main-content" id="contact">
            <div className="content-wrap">
                <h4>Contact Me</h4>
                <p>You can find me on <a href="https://www.linkedin.com/in/niilo-smeds-4a0605120">LinkedIn</a>, <a href="https://github.com/nsmeds">Github</a> and <a href="https://gitlab.com/niilo">Gitlab</a>.</p>
                <p>Feel free to <Mailto email="niilosmeds@gmail.com" obfuscate={true}>email me</Mailto> and check out my current <a href="https://www.dropbox.com/s/or7t9rf142z5i0f/Niilo%20Smeds%20Resume.pdf?dl=0">resume</a>.</p>
            </div>
        </div>
    )
}

export default Contact;