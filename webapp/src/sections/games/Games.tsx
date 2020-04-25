import React, { useState, useEffect } from 'react';
import ProjectSummary from '../../components/project.summary/ProjectSummary';
import index from '../../db/games/games.json';

function Games(headersLevel: number = 2) {
    let [projectsData, setProjectsData] = useState<Array<any>>([]);

    useEffect(() => {
        let data: Array<any> = [];
        index['games'].forEach(gameId => {
            data.push({
                ...require(`../../db/games/${gameId}`),
                id: gameId
            });
        });
        setProjectsData(data);
    }, []);

    return (
        <div className="row">
            {projectsData.map((projectData, index) => (
                <ProjectSummary key={index} projectData={projectData} />
            ))}
        </div>
    );
}

export default Games;