import React, { useState, useEffect } from 'react';
import ProjectSummary from '../../components/project.summary/ProjectSummary';
import TagsLink from '../../components/tags.list/TagsList';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

function ProjectsList(props: any) {
    let {projectsType, projectIds, headersLevel = 2} = props;
    let [projectsData, setProjectsData] = useState<Array<any>>([]);
    let [tagIds, setTagsIds] = useState<Array<string>>([]);
    let [selectedTagIds, setSelectedTagIds] = useState<Array<string>>([]);

    useEffect(() => {
        let data: Array<any> = [];
        projectIds.forEach((projectId: string) => {
            data.push({
                ...require(`../../db/${projectsType}/${projectId}`),
                id: projectId
            });
        });
        setProjectsData(data);

        let tags = require(`../../db/${projectsType}/tags.json`)['tags'];
        setTagsIds(Object.keys(tags));
    }, [projectsType, projectIds]);

    return (
        <>
            <Breadcrumb path={[['home'], [projectsType]]} />
            <div className="row">
                <p>Filtrar por etiquetas</p>
                <TagsLink projectsType={projectsType} tagIds={tagIds} selectedTagIds={selectedTagIds} setSelectedTagIds={setSelectedTagIds} />
            </div>
            <div className="row">
                {projectsData
                    .filter((projectData) => !selectedTagIds.length || selectedTagIds.every(selectedTagId => projectData.tags.includes(selectedTagId)))
                    .map((projectData, index) => (
                        <ProjectSummary key={index} projectSubDir={projectsType} projectData={projectData} headerLevel={headersLevel} />
                    ))}
            </div>
        </>
    );
}

export default ProjectsList;