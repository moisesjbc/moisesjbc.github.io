import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

function GamePlay() {
    let { id } = useParams();
    const gameData: any = require(`../../db/games/${id}.json`);

    return (
        <>
            <Breadcrumb path={[['home'], ['games'], [`games/${id}`, gameData.title], ['play']]} />

            <div className="row">
                <iframe title={id} width="100%" height="768px" src={`/play/${id}/index.html`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </>
    );
}

export default GamePlay;