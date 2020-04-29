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
        <div className="row">
            {projectsData.map((projectData, index) => (
                <ProjectSummary key={index} projectSubDir={projectsType} projectData={projectData} />
            ))}
        </div>
    );
}

export default ProjectsList;