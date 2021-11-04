import CategoryList from "../Helpers/CategoryList";
import Filter from "../Models/Filter";

const getFilters = (): Filter[] => {
  const filters = Object.values(CategoryList);
  return filters.map((f) => new Filter(f));
};

export default getFilters;
