import GameData from "../Data/GameData";
import Game from "../Models/Game";

const getGames = (): Game[] =>
  GameData.map((v) => {
    const g = new Game(v.title);
    g.setDescription(v.description);
    g.setCategory(v.category);
    g.setIcon(v.icon);
    return g;
  });

export default getGames;
