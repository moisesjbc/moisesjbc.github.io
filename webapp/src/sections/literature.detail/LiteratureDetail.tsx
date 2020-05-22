import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Markdown from '../../components/markdown/Markdown';
import LinksList from '../../components/links.list/LinksList';
import TagsList from '../../components/tags.list/TagsList';
import ContentHeader from '../../components/content.header/ContentHeader';
import './LiteratureDetail.css';

function LiteratureDetail() {
    let { id } = useParams();
    let [literatureData, setLiteratureData] = useState<any>(null);

    useEffect(() => {
        try {
            const data: any = require(`../../db/literature/${id}.json`);

            if (data.src) {
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
        <div className="project-details">
            <ContentHeader path={[['home'], ['literature'], [id, literatureData.title]]} />

            <Markdown source={literatureData.summary} />

            {literatureData.synopsis && <section>
                <h2>Sinopsis</h2>
                <Markdown source={literatureData.synopsis} />
            </section>}

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
        <div className="project-details">
            <ContentHeader path={[['home'], ['literature'], [id, literatureData.title]]} displayTitle={false} />

            <div className="li-dashed">
                <Markdown source={literatureData.body} />
            </div>
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