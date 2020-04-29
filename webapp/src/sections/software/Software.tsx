import React from 'react';
import ProjectsList from '../../components/projects.list/ProjectsList';
import index from '../../db/software/index.json';

function Software() {
    return (
        <>
            <ProjectsList projectsType="software" projectIds={index['software']} />
        </>
    );
}

export default Software;