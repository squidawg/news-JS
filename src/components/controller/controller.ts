import AppLoader from './appLoader';
import { Callback, AppControllerTemplate } from "../../variables";

class AppController extends AppLoader implements AppControllerTemplate{
    getSources<Type extends Callback>(callback: Type):void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e:Event, callback: Callback):void {
        let target = <Element>e.target ;
        const newsContainer = <Element>e.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = <string>target.getAttribute('data-source-id');
                if (<string>newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source' , sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = <Element>target.parentNode;
        }
    }
}

export default AppController;
