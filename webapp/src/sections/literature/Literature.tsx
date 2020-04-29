import React from 'react';
import ProjectsList from '../../components/projects.list/ProjectsList';
import index from '../../db/literature/index.json';

function Literature() {
    return (
        <>
            <h2>Libros</h2>
            <ProjectsList projectsType="literature" projectIds={index['books']} />

            <h2>Relatos cortos</h2>
            {index['short-stories'].map((periodShortStories: any, index: number) => (
                <section key={`''+${index}`}>
                    <h3>{ periodShortStories.year }</h3>
                    <ProjectsList projectsType="literature" projectIds={periodShortStories['short-stories']} />
                </section>
            ))}
        </>
    );
}

export default Literature;