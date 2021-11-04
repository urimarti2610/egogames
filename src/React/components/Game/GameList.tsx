import './Game.scss';

import React from "react";
import IGameListReact from "../../../Interfaces/React/IGameListReact"
import GameElement from "./GameElement"
import NoGameElement from './NoGameElement';

const GameList = (props: IGameListReact) => <div className="game-list">
    {props.check ? props.list.map((game, index) => <GameElement game={game} key={index} />) : <NoGameElement />}
</div>


export default GameList;
