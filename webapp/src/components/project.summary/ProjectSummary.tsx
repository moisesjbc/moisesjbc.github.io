import React from 'react';
import ReactMarkdown from 'react-markdown';
import { NavLink } from 'react-router-dom';
import TagsList from '../tags.list/TagsList';
import './ProjectSummary.css';

function ProjectSummary(props: any) {
    let {projectSubDir, projectData, headerLevel = 2} = props;

    const projectHeader = (projectTitle: string, headerLevel: number) => {
        return React.createElement(`h${headerLevel}`, null, projectTitle);
    };

    return (
        <div className="project-summary-div col-3">
             { projectHeader(projectData['title'], headerLevel) }
             <div className="project-summary-body-div">
                { Boolean(projectData['img']) && <NavLink to={`/${projectSubDir}/${projectData['id']}`}><img src={projectData['img']} alt={`Captura de pantalla del juego '${projectData['title']}'`} /></NavLink> }
                <ReactMarkdown source={projectData['summary']}/>
            </div>
            <div className="project-summary-footer-div">
                <NavLink to={`/${projectSubDir}/${projectData['id']}`}>Ir a página de {projectData['title']}</NavLink>
            </div>
            <TagsList projectsType={projectSubDir} tagIds={projectData['tags']} />
        </div>
    )
}

export default ProjectSummary;