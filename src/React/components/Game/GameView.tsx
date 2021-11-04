import React from "react";
import getGames from "../../../Controllers/GameController";

const GameView = (props: any) => {
    const url = props.match.params.url
    const games = getGames()
    const game = games.find(v => v.url === url)
    return <div className="game-view">
        <h1>{game.title}</h1>
        <h2>{game.description}</h2>
        <p>{game.category}</p>
    </div>
}

export default GameView;