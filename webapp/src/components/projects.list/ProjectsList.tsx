import React, { useState, useEffect } from 'react';
import ProjectSummary from '../../components/project.summary/ProjectSummary';

function ProjectsList(props: any) {
    let {projectsType, projectIds} = props;
    let [projectsData, setProjectsData] = useState<Array<any>>([]);

    useEffect(() => {
        let data: Array<any> = [];
        projectIds.forEach((projectId: string) => {
            data.push({
                ...require(`../../db/${projectsType}/${projectId}`),
                id: projectId
            });
        });
        setProjectsData(data);
    }, [projectsType, projectIds]);

    return (
        <>
            {projectsData.map((projectData, index) => (
                <ProjectSummary key={index} projectData={projectData} />
            ))}
        </>
    );
}

export default ProjectsList;