import React, { useState, useEffect } from 'react';
import ProjectSummary from '../../components/project.summary/ProjectSummary';
import TagsLink from '../../components/tags.list/TagsList';
import ContentHeader from '../../components/content.header/ContentHeader';

function ProjectsList(props: any) {
    let {projectsType, projectIds, headersLevel = 2} = props;
    let [projectsData, setProjectsData] = useState<any>({
        starred: [],
        others: []
    });
    let [tagIds, setTagsIds] = useState<Array<string>>([]);
    let [selectedTagIds, setSelectedTagIds] = useState<Array<string>>([]);

    useEffect(() => {
        let data: any = {
            starred: [],
            others: []
        };
        projectIds.forEach((projectId: string) => {
            const projectData = {
                ...require(`../../db/${projectsType}/${projectId}`),
                id: projectId
            };

            if (projectData.starred) {
                data.starred.push(projectData);
            } else {
                data.others.push(projectData);
            }
        });
        setProjectsData(data);

        let tags = require(`../../db/${projectsType}/tags.json`)['tags'];
        setTagsIds(Object.keys(tags));
    }, [projectsType, projectIds]);

    const displayProjects = (title: string, projects: Array<any>) => (
        <>
            <h2>{ title }</h2>
            <div className="row">
                {projects
                    .filter((projectData) => !selectedTagIds.length || selectedTagIds.every(selectedTagId => projectData.tags.includes(selectedTagId)))
                    .map((projectData, index) => (
                        <ProjectSummary key={index} projectSubDir={projectsType} projectData={projectData} headerLevel={headersLevel} />
                    ))}
            </div>
        </>
    )

    return (
        <>
            <ContentHeader path={[['home'], [projectsType]]} />
            <div className="row">
                <p>Filtrar por etiquetas</p>
                <TagsLink projectsType={projectsType} tagIds={tagIds} selectedTagIds={selectedTagIds} setSelectedTagIds={setSelectedTagIds} />
            </div>
            { displayProjects('Descatados', projectsData.starred) }
            { displayProjects('Otros', projectsData.others) }
        </>
    );
}

export default ProjectsList;