import './news.css';
import { Article } from "../../../variables";
class News{

    draw(data: Array<Article> | []):void {
        const news: Article[] = data.length >= 10 ? data.filter((_item:Article, idx:number) => idx < 10) : data;

        const fragment = document.createDocumentFragment() as DocumentFragment;
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item:Article, idx:number):void => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLTemplateElement;
            const newsCloneItem = newsClone.querySelector('.news__item') as HTMLTemplateElement;
            const newsMetaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLTemplateElement;
            const newsMetaAuthor = newsClone.querySelector('.news__meta-author') as HTMLTemplateElement;
            const newsMetaDate = newsClone.querySelector('.news__meta-date') as HTMLTemplateElement;
            const newsDescTitle = newsClone.querySelector('.news__description-title') as HTMLTemplateElement;
            const newsDescSource = newsClone.querySelector('.news__description-source') as HTMLTemplateElement;
            const newsDescContent = newsClone.querySelector('.news__description-content') as HTMLTemplateElement;
            const newsReadMore = newsClone.querySelector('.news__read-more a') as HTMLTemplateElement;
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
        const newsHtml = document.querySelector('.news') as HTMLTemplateElement;
        newsHtml.innerHTML = '';
        newsHtml.appendChild(fragment);
    }
}

export default News;
