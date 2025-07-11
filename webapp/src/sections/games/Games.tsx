import React from 'react';
import ProjectsList from '../../components/projects.list/ProjectsList';
import index from '../../db/games/games.json';

type GamesProps = {
    language: string
}

function Games(props: GamesProps) {
    const {language} = props;
    console.log('language', language);
    return (
        <>
            <ProjectsList projectsType="games" projectIds={index['games']} />
        </>
    );
}

export default Games;