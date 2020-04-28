import React from 'react';
import ProjectsList from '../../components/projects.list/ProjectsList';
import index from '../../db/games/games.json';

function Games(headersLevel: number = 2) {
    return (
        <div className="row">
            <ProjectsList projectsType="games" projectIds={index['games']} />
        </div>
    );
}

export default Games;