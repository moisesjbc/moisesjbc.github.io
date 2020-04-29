import React from 'react';
import ProjectsList from '../../components/projects.list/ProjectsList';
import index from '../../db/games/games.json';

function Games(headersLevel: number = 2) {
    return (
        <>
            <ProjectsList projectsType="games" projectIds={index['games']} />
        </>
    );
}

export default Games;