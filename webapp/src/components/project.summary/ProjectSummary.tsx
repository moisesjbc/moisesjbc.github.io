import React from 'react';
import ReactMarkdown from 'react-markdown';
import { NavLink } from 'react-router-dom';
import './ProjectSummary.css';

function ProjectSummary(props: any) {
    let {projectSubDir, projectData} = props;

    return (
        <div className="project-summary-div col-3">
             <h2>{ projectData['title'] }</h2>
             <div className="project-summary-body-div">
                { Boolean(projectData['img']) && <NavLink to={`/${projectSubDir}/${projectData['id']}`}><img src={projectData['img']} alt={`Captura de pantalla del juego '${projectData['title']}'`} /></NavLink> }
                <ReactMarkdown source={projectData['summary']}/>
            </div>
            <div className="project-summary-footer-div">
                <NavLink to={`/${projectSubDir}/${projectData['id']}`}>Ir a página de {projectData['title']}</NavLink>
            </div>
        </div>
    )
}

export default ProjectSummary;