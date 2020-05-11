import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Markdown from '../../components/markdown/Markdown';
import LinksList from '../../components/links.list/LinksList';
import TagsList from '../../components/tags.list/TagsList';
import ContentHeader from '../../components/content.header/ContentHeader';

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
        <div className="row">
            {softwareData ?
                <div>
                    <ContentHeader path={[['home'], ['software'], [id, softwareData.title]]} />

                    <img src={softwareData.img} alt={`Captura de pantalla de '${softwareData.title}'`} />
                    <Markdown source={softwareData.summary} />

                    {softwareData.multimedia && <section>
                        <h2>Multimedia</h2>
                        {softwareData.multimedia.videos.map((video: any, index: number) => (
                            <iframe key={index} title={''+index} width="560" height="315" src={video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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