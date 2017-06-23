import React from 'react';

const Projects = props => {

    // console.log('props from Projects', props);

    function createBodyHtml() {
        return {__html: props.body}
    }

    return (

                <li className="project-li" key={props.key}>
                    <h4><a href={props.url}>{props.title}</a></h4>
                    <div className="project-body" dangerouslySetInnerHTML={createBodyHtml()}></div>
                    {props.image && <a href={props.links.github}><img className="project-image" src={props.image} /></a>}
                    <div className="project-body">
                        <a href={props.links.github}>Source on Github</a> |
                        <a href={props.links.live}> Live Site</a>
                    </div>
                </li>
    )
}

export default Projects;