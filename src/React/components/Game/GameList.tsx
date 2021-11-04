import './Game.scss';

import React, { useState } from "react";
import IGameListReact from "../../../Interfaces/React/IGameListReact"
import GameElement from "./GameElement"

const GameList = (props: IGameListReact) => {
    const [gameList, setGameList] = useState(props.list)
    return <div className="game-list">
        {gameList.map((game, index) => <GameElement game={game} key={index} />)}
    </div>
}

export default GameList;
