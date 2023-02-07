import News from './news/news';
import Sources from './sources/sources';
import Data, { Article, PickedSources, AppViewTemplate } from "../../types";

class AppView implements AppViewTemplate{
    private readonly newsData: News;
    private readonly sourcesData: Sources;
    constructor() {
        this.newsData = new News();
        this.sourcesData = new Sources();
    }

    drawNews<Type extends Data>(data: Type) : void {
        const values: Array<Article<string>> = data.articles;
            this.newsData.draw(values);

    }

    drawSources<Type extends Data>(data: Type) : void {
        const values: Array<PickedSources> = data.sources;
        this.sourcesData.draw(values);
    }
}

export default AppView;
