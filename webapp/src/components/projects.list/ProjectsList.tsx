import React, { useState, useEffect } from 'react';
import ProjectSummary from '../../components/project.summary/ProjectSummary';
import TagsList from '../../components/tags.list/TagsList';
import ContentHeader from '../../components/content.header/ContentHeader';
import './ProjectsList.css';

function ProjectsList(props: any) {
    let {projectsType, projectIds, headersLevel = 2} = props;
    let [projectsData, setProjectsData] = useState<Array<any>>([]);
    let [tagIds, setTagsIds] = useState<Array<string>>([]);
    let [selectedTagIds, setSelectedTagIds] = useState<Array<string>>([]);

    useEffect(() => {
        let data: any[] = [];
        projectIds.forEach((projectId: string) => {
            const projectData = {
                ...require(`../../db/${projectsType}/${projectId}`),
                id: projectId
            };

            if (projectData) {
                data.push(projectData);
            }
        });

        const compareProjects = (projectA: any, projectB: any) => {
            const starredDiff = (projectB.starred ? 1 : 0) - (projectA.starred ? 1: 0);
            if (starredDiff) {
                return starredDiff;
            }

            const yearDiff = ((+projectB.year) ? projectB.year : 0)  - ((+projectA.year) ? projectA.year : 0);
            if (yearDiff) {
                return yearDiff;
            }

            return projectA.title.localeCompare(projectB.title);
        }

        setProjectsData(data.sort(compareProjects));

        let tags = require(`../../db/${projectsType}/tags.json`)['tags'];
        setTagsIds(Object.keys(tags));
    }, [projectsType, projectIds]);

    const displayProjects = (title: string, projects: Array<any>) => (
        <>
            <h2 className="list-title">{ title }</h2>
            <div className="row projects-list">
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
            <TagsList projectsType={projectsType} tagIds={tagIds} selectedTagIds={selectedTagIds} setSelectedTagIds={setSelectedTagIds} />
            { displayProjects('', projectsData) }
        </>
    );
}

export default ProjectsList;