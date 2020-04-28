import React from 'react';
import ProjectsList from '../../components/projects.list/ProjectsList';
import index from '../../db/software/index.json';

function Software() {
    return (
        <div className="row">
            <ProjectsList projectsType="software" projectIds={index['software']} />
        </div>
    );
}

export default Software;