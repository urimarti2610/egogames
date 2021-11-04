import CategoryList from "../Helpers/CategoryList";
import IconList from "../Helpers/IconList";

export default interface IGameList {
  title: string;
  description: string;
  category: CategoryList;
  icon: IconList;
}
