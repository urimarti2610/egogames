import CategoryList from "../Helpers/CategoryList";

export default class Filter {
  public name: CategoryList;
  public filter: boolean = false;

  public constructor(name: CategoryList) {
    this.name = name;
    if (this.name === CategoryList.ALL) this.setFilter(true)
  }

  public toggleFilter = (): void => {
    this.filter = !this.filter;
  };

  public setFilter = (filter: boolean): void => {
    this.filter = filter;
  };
}
