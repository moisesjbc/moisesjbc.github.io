import React from 'react';
import { useParams } from 'react-router-dom';
import ContentHeader from '../../components/content.header/ContentHeader';
import './GamePlay.css';

function GamePlay() {
    let { id } = useParams();
    const gameData: any = require(`../../db/games/${id}.json`);

    const displayGame: boolean = (gameData['dimensions'] && (gameData['dimensions']['width'] < window.innerWidth)) &&
        (gameData['dimensions'] && (gameData['dimensions']['height'] < window.innerHeight));

    return (
        <>
            <div className="game-play-div" style={displayGame ? {width: gameData['dimensions']['width']} : {}}>
                <ContentHeader path={[['home'], ['games'], [`games/${id}`, gameData.title], ['play']]} />

                {displayGame ?
                    <iframe title={id} className="frame" width={`${gameData['dimensions']['width']}px`} height={`${gameData['dimensions']['height']}px`} src={`/play/${id}/index.html`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    : <span>Juego no preparado para este tamaño de pantalla / dispositivo móvil</span>}
            </div>
        </>
    );
}

export default GamePlay;