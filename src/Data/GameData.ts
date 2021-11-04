import Category from "../Helpers/CategoryList";
import Icon from "../Helpers/IconList";
import IGameList from "../Interfaces/IGameList";

const GameData: IGameList[] = [
  {
    title: "Solitaire",
    description: "The classic solitaire game",
    icon: Icon.SOLITAIRE,
    category: Category.CARDS,
  },
  {
    title: "21 Jack",
    description: "Join 21 and win!",
    icon: Icon.JACK_21,
    category: Category.CARDS,
  },
  {
    title: "Bowling",
    description: "Enjoy virtual bowling by challenging your friends!",
    icon: Icon.BOWLING,
    category: Category.SPORT,
  },
  {
    title: "Dominoes Royales",
    description: "Classic domino game with cash prizes",
    icon: Icon.DOMINOES,
    category: Category.BOARD,
  },
  {
    title: "Ball Pool",
    description: "Fun Billiard Game",
    icon: Icon.BALL_POOL,
    category: Category.SPORT,
  },
  {
    title: "Chess Stars",
    description: "Boast your chess skills. Checkmate to win prizes",
    icon: Icon.CHESS_STARS,
    category: Category.BOARD,
  },
];

export default GameData;
