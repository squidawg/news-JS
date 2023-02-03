import AppController from '../controller/controller.js';
import AppView from '../view/appView'
import Data from "../../variables";
export default class App{
  private controller: AppController;
  private view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start(): void {
    const sources = document.querySelector('.sources') as HTMLElement;
    sources
      .addEventListener('click', (e:MouseEvent) =>
        this.controller.getNews(e, (data: Data) :void => this.view.drawNews(data)));
    this.controller.getSources((data: Data) :void => this.view.drawSources(data));
  }

}