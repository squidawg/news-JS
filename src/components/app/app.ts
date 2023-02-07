import AppController from '../controller/controller';
import AppView from '../view/appView'
import Data, { Callback, AppTemplate } from "../../variables";

export default class App implements AppTemplate{
  private readonly controller: AppController;
  private readonly view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start(): void {
    const sources = document.querySelector('.sources') as HTMLElement;
    sources
      .addEventListener('click', (e:MouseEvent) =>
        this.controller.getNews(e, (data: Data) :void => this.view.drawNews<Data>(data)));
    this.controller.getSources<Callback>((data: Data) :void => this.view.drawSources<Data>(data));
  }

}

