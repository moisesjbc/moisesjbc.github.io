import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Markdown from '../../components/markdown/Markdown';
import LinksList from '../../components/links.list/LinksList';
import TagsList from '../../components/tags.list/TagsList';
import ContentHeader from '../../components/content.header/ContentHeader';
import './SoftwareDetail.css';

function SoftwareDetail() {
    let { id } = useParams();
    let [softwareData, setSoftwareData] = useState<any>(null);

    useEffect(() => {
        try {
            const data: any = require(`../../db/software/${id}.json`);
            setSoftwareData(data);
        } catch {
            setSoftwareData(null);
        }
    }, [id]);

    return (
        <div className="project-details">
            {softwareData ?
                <div>
                    <ContentHeader path={[['home'], ['software'], [id, softwareData.title]]} />

                    <div className="project-details-img frame"><img src={softwareData.img} alt={`Captura de pantalla de '${softwareData.title}'`} /></div>
                    <Markdown source={softwareData.summary} />

                    {softwareData.features && <section>
                        <h2>Características</h2>
                        <Markdown source={softwareData.features} />
                    </section>}

                    {softwareData.multimedia && <section>
                        <h2>Multimedia</h2>
                        {softwareData.multimedia.videos.map((video: any, index: number) => (
                            <div className="multimedia">
                                <iframe key={index} title={''+index} className="frame" width={""+Math.min(560, window.innerWidth - 30)} height="315" src={video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        ))};
                    </section>}

                    {softwareData.links && <section>
                        <h2>Enlaces y descargas</h2>
                        <LinksList links={softwareData.links} />
                    </section>}

                    <h2>Tags</h2>
                    <TagsList projectsType='software' tagIds={softwareData.tags} />
                </div>
                : <div>
                    <p>El software buscado no existe o no pudo ser cargado.</p>
                    <p><NavLink to="/software">Volver a la lista de software</NavLink></p>
                </div>
            }
        </div>
    );
}

export default SoftwareDetail;