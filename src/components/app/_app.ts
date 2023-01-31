import AppController from '../controller/controller.js';
import AppView from '../view/appView.js'

export default class App {
  private controller: AppController;
  private view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    const sources = document.querySelector('.sources') as HTMLElement;
    sources
      .addEventListener('click', (e) => this.controller.getNews(e, (data: never) => this.view.drawNews(data)));
    this.controller.getSources((data: never) => this.view.drawSources(data));
  }
}