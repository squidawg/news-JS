import News from './news/news';
import Sources from './sources/sources';
import Data , {Article, Source} from "../../variables";

class AppView{
    private newsData: News;
    private sourcesData: Sources;
    constructor() {
        this.newsData = new News();
        this.sourcesData = new Sources();
    }

    drawNews(data: Data) : void {
        const values: [Article] | [] = data?.articles;
            this.newsData.draw(values);

    }

    drawSources(data: Data) : void {
        const values: [Source] | [] = data?.sources;
        this.sourcesData.draw(values);
    }
}

export default AppView;
