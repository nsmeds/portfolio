import React from 'react';
import Mailto from 'react-mailto';

const Contact = props => {
    return (
        <div className="main-content" id="contact">
            <div className="content-wrap">
                <h4>Contact Me</h4>
                <p>You can find me on <a href="https://github.com/nsmeds">Github</a>, <a href="https://www.linkedin.com/in/niilo-smeds-4a0605120">LinkedIn</a> or <Mailto email="niilosmeds@gmail.com" obfuscate={true}>email me</Mailto>.</p>
            </div>
        </div>
    )
}

export default Contact;