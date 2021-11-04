import CategoryList from "../Helpers/CategoryList";
import IconList from "../Helpers/IconList";

export default class Game {
  public title: string = "";
  public description: string = "";
  public url: string = "";
  public category: CategoryList;
  public icon: IconList;
  public visible: boolean = true;

  public constructor(title: string) {
    this.title = title;
    this.setUrl();
  }

  public setDescription(s: string): void {
    this.description = s;
  }

  public setCategory(category: CategoryList): void {
    this.category = category;
  }

  public setIcon(icon: IconList): void {
    this.icon = icon;
  }

  public setVisible(visible: boolean): void {
    this.visible = visible;
  }

  public toggleVisible(): void {
    this.visible = !this.visible;
  }

  private setUrl():void {
    const re = new RegExp(' ', 'g');
    this.url = this.title.toLowerCase().trim().replace(re, '-');
  }
}
