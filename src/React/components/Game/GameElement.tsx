import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconList from "../../../Helpers/IconList";
import UrlList from "../../../Helpers/UrlList";
import IGameElement from "../../../Interfaces/React/IGameElement";

const GameElement = (props: IGameElement) => {
    const [game, setGame] = useState(props.game)
    return game.visible ? <div className="game">
        <img className="game-img" src={`resources/${game.icon}`} alt={game.title} />
        <div className="info">
            <h3><Link to={`${UrlList.GAMES}/${game.url}`}>{game.title}</Link></h3>
            <h4>{game.description}</h4>
            <span className="category">{game.category}</span>
        </div>
        <Link to='#' className="download-link"><img src={`resources/${IconList.DOWNLOAD}`} alt="Descargar" /></Link>
    </div> : null
}

export default GameElement;