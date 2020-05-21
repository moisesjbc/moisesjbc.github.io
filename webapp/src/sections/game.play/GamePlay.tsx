import React from 'react';
import { useParams } from 'react-router-dom';
import ContentHeader from '../../components/content.header/ContentHeader';
import './GamePlay.css';

function GamePlay() {
    let { id } = useParams();
    const gameData: any = require(`../../db/games/${id}.json`);

    const width: string = gameData['dimensions'] ? gameData['dimensions']['width'] : "100%";
    const height: string = gameData['dimensions'] ? gameData['dimensions']['height']: "768px";

    return (
        <>
            <ContentHeader path={[['home'], ['games'], [`games/${id}`, gameData.title], ['play']]} />

            <div className="game-play-div">
                <iframe title={id} className="frame" width={width} height={height} src={`/play/${id}/index.html`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </>
    );
}

export default GamePlay;