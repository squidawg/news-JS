import './sources.css';
import { Source } from "../../../variables";

class Sources {
    draw(data: [Source] | []):void {
        const fragment = document.createDocumentFragment() as DocumentFragment;
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item:Source):void => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;
            const sourceItemName = sourceClone.querySelector('.source__item-name') as HTMLElement;
            const sourceItem = sourceClone.querySelector('.source__item') as HTMLElement;
            sourceItemName.textContent = item.name;
            sourceItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });
        const sources = document.querySelector('.sources') as HTMLElement;
        sources.append(fragment);
    }
}

export default Sources;