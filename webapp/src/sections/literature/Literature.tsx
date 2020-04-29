import React from 'react';
import ProjectsList from '../../components/projects.list/ProjectsList';
import index from '../../db/literature/index.json';

function Literature() {
    return (
        <>
            <h2>Libros</h2>
            <ProjectsList projectsType="literature" projectIds={index['books']} headersLevel={3} />

            <h2>Relatos cortos</h2>
            {index['short-stories'].map((periodShortStories: any, index: number) => (
                <section key={`''+${index}`}>
                    <h3>{ periodShortStories.year }</h3>
                    <ProjectsList projectsType="literature" projectIds={periodShortStories['short-stories']} headersLevel={4} />
                </section>
            ))}
        </>
    );
}

export default Literature;