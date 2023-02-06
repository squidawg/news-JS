import './sources.css';
import { PickedSources } from "../../../variables";

class Sources {
    draw(data: Array<PickedSources> | []):void {
        const fragment = document.createDocumentFragment() as DocumentFragment;
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item:PickedSources):void => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;
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
