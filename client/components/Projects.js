import React from 'react';

const Projects = props => {

    // console.log('props from Projects', props);

    function createBodyHtml() {
        return {__html: props.body}
    }

    return (
                <li>
                    <h4><a href={props.url}>{props.title}</a></h4>
                    <img src={props.img} />
                    <div dangerouslySetInnerHTML={createBodyHtml()}></div>
                    <a href={props.links.github}>Source on Github</a> |
                    <a href={props.links.live}> Live Site</a>
                </li>
    )
}

export default Projects;