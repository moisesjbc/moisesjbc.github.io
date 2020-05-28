import React from 'react';
import Markdown from '../../components/markdown/Markdown';
import { NavLink } from 'react-router-dom';
import TagsList from '../tags.list/TagsList';
import './ProjectSummary.css';

function ProjectSummary(props: any) {
    let {projectSubDir, projectData} = props;

    const locale = require(`../../db/locale/es_ES.json`);

    const projectHeader = (projectTitle: string, year: string, starred: boolean) => {
        return (
            <h2>
                {projectTitle} ({year}) {starred && <span className="starred">{ locale.starred }</span>}
            </h2>
        );
    };

    return (
        <div className="project-summary-div col-12 col-sm-3">
             { projectHeader(projectData['title'], projectData['year'], projectData['starred']) }
             <div className="project-summary-body-div">
                { Boolean(projectData['img']) && <NavLink to={`/${projectSubDir}/${projectData['id']}`}><img src={projectData['img']} alt={`Captura de pantalla del juego '${projectData['title']}'`} /></NavLink> }
                <Markdown source={projectData['summary']}/>
            </div>

            <div className="project-summary-footer-div">
                <NavLink to={`/${projectSubDir}/${projectData['id']}`}>Ir a página de {projectData['title']}</NavLink>
            </div>

            <TagsList projectsType={projectSubDir} tagIds={projectData['tags']} />
        </div>
    )
}

export default ProjectSummary;