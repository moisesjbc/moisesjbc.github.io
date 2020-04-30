import React from 'react';
import { useParams } from 'react-router-dom';

function GamePlay() {
    let { id } = useParams();

    return (
        <div className="row">
            <iframe title={id} width="100%" height="768px" src={`/play/${id}/index.html`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    );
}

export default GamePlay;