import './news.css';
import { NewsTemplate, Article} from "../../../types";


class News implements NewsTemplate{

    draw(data: Array<Article<string>>):void {
        const news: Article<string>[] = data.length >= 10 ? data.filter((_item:Article<string>, idx:number) => idx < 10) : data;

        const fragment = document.createDocumentFragment() as DocumentFragment;
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item:Article<string>, idx:number)=> {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLTemplateElement;
            const newsCloneItem = newsClone.querySelector('.news__item') as HTMLElement;
            const newsMetaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            const newsMetaAuthor = newsClone.querySelector('.news__meta-author') as HTMLElement;
            const newsMetaDate = newsClone.querySelector('.news__meta-date') as HTMLElement;
            const newsDescTitle = newsClone.querySelector('.news__description-title') as HTMLElement;
            const newsDescSource = newsClone.querySelector('.news__description-source') as HTMLElement;
            const newsDescContent = newsClone.querySelector('.news__description-content') as HTMLElement;
            const newsReadMore = newsClone.querySelector('.news__read-more a') as HTMLElement;
            if (idx % 2) newsCloneItem.classList.add('alt');

            newsMetaPhoto.style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            newsMetaAuthor.textContent = item.author || item.source.name;
            newsMetaDate.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            newsDescTitle.textContent = item.title;
            newsDescSource.textContent = item.source.name;
            newsDescContent.textContent = item.description;
            newsReadMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });
        const newsHtml = document.querySelector('.news') as HTMLElement;
        newsHtml.innerHTML = '';
        newsHtml.appendChild(fragment);
    }
}

export default News;
