import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Markdown from '../../components/markdown/Markdown';
import LinksList from '../../components/links.list/LinksList';
import TagsList from '../../components/tags.list/TagsList';
import ContentHeader from '../../components/content.header/ContentHeader';

function GameDetail() {
    let { id } = useParams();
    let [gameData, setGameData] = useState<any>(null);

    useEffect(() => {
        try {
            const data: any = require(`../../db/games/${id}.json`);
            setGameData(data);
        } catch {
            setGameData(null);
        }
    }, [id]);

    const renderLinkWithoutAuthor = (resource: any) => {
        if (resource.href) {
            return (<span><a href={ resource.href }>{ resource.name }</a></span>);
        } else {
            return (<span>{ resource.name }</span>);
        }
    };

    return (
        <div className="project-details">
            {gameData ?
                <div>
                    <ContentHeader path={[['home'], ['games'], [id, gameData.title]]} />

                    <div className="project-details-img frame"><img src={gameData.img} alt={`Captura de pantalla del juego '${gameData.title}'`} /></div>
                    <Markdown source={gameData.summary}/>

                    {gameData.background && <section>
                        <h2>Trasfondo</h2>
                        <Markdown source={gameData.background} />
                    </section>}

                    {gameData.multimedia && <section>
                        <h2>Multimedia</h2>
                        {gameData.multimedia.videos.map((video: any, index: number) => (
                            <div className="multimedia">
                                <iframe key={index} title={''+index} className="frame" width={""+Math.min(560, window.innerWidth - 30)} height="315" src={video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        ))};
                    </section>}

                    {gameData.mechanics && <section>
                        <h2>Mecánicas</h2>
                        <Markdown source={gameData.mechanics} />
                    </section>}

                    {gameData.controls && <section>
                        <h2>Controles</h2>
                        <ul>
                            {gameData.controls.map((control: any, index: number) => (
                                <li key={index}>{ control.key }: { control.meaning }</li>
                            ))}
                        </ul>
                    </section>}

                    <h2>Créditos</h2>
                    {gameData.credits.own.map((credits: any, index: number) => (
                        <section key={index}>
                            <h3>{ credits.title }</h3>
                            <ul>
                                {credits.people.map((person: any, index: number) => (
                                    <li key={index}>{ person }</li>
                                ))}
                            </ul>
                            { credits.license && <p><strong>Licencia:</strong> {credits.license}</p> }
                        </section>
                    ))}

                    {gameData.credits['third-party'] && <section>
                        <h2>Trabajo de terceros</h2>
                        {gameData.credits['third-party'].map((credits: any, index: number) => (
                            <section key={index}>
                                <h3>{ credits.title }</h3>
                                {credits.body && <Markdown source={credits.body} />}
                                {credits.resources && <ul>
                                    {credits.resources.map((resource: any, index: number) => (
                                        <li key={index}>
                                            { resource.author ?
                                                <span>"{ resource.href ?
                                                    <a href={resource.href}>{ resource.name }</a>
                                                    : resource.name }"
                                                - { resource.author_href ?
                                                    <a href={resource.author_href}>{ resource.author }</a>
                                                    : resource.author }
                                                </span>
                                                : renderLinkWithoutAuthor(resource)
                                            }
                                        </li>
                                    ))}
                                </ul>}
                            </section>
                        ))}
                    </section>}

                    {gameData.credits.thanks && <section>
                        <h2>Agradecimientos</h2>
                        <ul>
                            {gameData.credits.thanks.map((thanks: any, index: number) => (
                                <li key={index}><Markdown source={thanks} /></li>
                            ))}
                        </ul>
                    </section>}

                    <h2>Enlaces y descargas</h2>
                    <LinksList links={gameData.links} />

                    <h2>Tags</h2>
                    <TagsList projectsType='games' tagIds={gameData.tags} />
                </div>
                : <div>
                    <p>El videojuego buscado no existe o no pudo ser cargado.</p>
                    <p><NavLink to="/games">Volver a la lista de videojuegos</NavLink></p>
                </div>
            }
        </div>
    );
}

export default GameDetail;