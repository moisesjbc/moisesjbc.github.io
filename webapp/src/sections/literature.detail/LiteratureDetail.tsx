import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import LinksList from '../../components/links.list/LinksList';
import TagsList from '../../components/tags.list/TagsList';

function LiteratureDetail() {
    let { id } = useParams();
    let [literatureData, setLiteratureData] = useState<any>(null);

    useEffect(() => {
        try {
            const data: any = require(`../../db/literature/${id}.json`);

            if (data.src) {
                console.log('fetching', data.src)
                fetch(data.src).then((result) => result.text()).then((responseBody) => {
                    data.body = responseBody;
                    setLiteratureData(data);
                }).catch(() => {
                    setLiteratureData(null);
                });
            } else {
                setLiteratureData(data);
            }
        } catch {
            setLiteratureData(null);
        }
    }, [id]);

    const renderBook = () => (
        <div>
            <h1>{ literatureData.title }</h1>
            <img src={literatureData.img} alt={`Captura de pantalla de '${literatureData.title}'`} />
            <ReactMarkdown source={literatureData.summary} />

            {literatureData.multimedia && <section>
                <h2>Multimedia</h2>
                {literatureData.multimedia.videos.map((video: any, index: number) => (
                    <iframe key={index} title={''+index} width="560" height="315" src={video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                ))};
            </section>}

            {literatureData.links && <section>
                <h2>Enlaces y descargas</h2>
                <LinksList links={literatureData.links} />
            </section>}

            <h2>Tags</h2>
            <TagsList projectsType='literature' tagIds={literatureData.tags} />
        </div>
    )

    const renderShortStory = () => (
        <div>
            <ReactMarkdown source={literatureData.body} />
            <h2>Tags</h2>
            <TagsList projectsType='literature' tagIds={literatureData.tags} />
        </div>
    )

    const renderLiterature = () => (
        literatureData.src ? renderShortStory() : renderBook()
    )

    return (
        <div className="row">
            {literatureData ?
                renderLiterature()
                : <div>
                    <p>El libro o relato buscado no existe o no pudo ser cargado.</p>
                    <p><NavLink to="/literature">Volver a la lista de libros y relatos cortos</NavLink></p>
                </div>
            }
        </div>
    );
}

export default LiteratureDetail;