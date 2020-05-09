import React from 'react';
import ProjectsList from '../../components/projects.list/ProjectsList';
import index from '../../db/literature/index.json';

function Literature() {
    return (
        <>
            <ProjectsList projectsType="literature" projectIds={index['literature']} />
        </>
    );
}

export default Literature;