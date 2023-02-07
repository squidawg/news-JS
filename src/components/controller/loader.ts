import Data from "../../variables";
import { ErrorStatus, Callback, PartialAttributes, LoaderTemplate} from "../../variables"


class Loader implements LoaderTemplate{
    readonly baseLink: string;
    readonly options: object;
    constructor(baseLink:string, options:object ) {
        this.baseLink = baseLink;
        this.options = options;
    }
    getResp(attributes:PartialAttributes,
        callback: Callback = () => {
            console.error('No callback for GET response');
        }

    ) :void {
        this.load('GET', callback, attributes);
    }

    errorHandler(res:Response):Response {
        if (!res.ok) {
            if (Object.values(ErrorStatus).includes(res.status))
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl<Type extends PartialAttributes>(attributes:Type):string{
        const urlOptions = { ...this.options, ...attributes.options  };
        let url = `${this.baseLink}${attributes.endpoint}?`;
        (Object.keys(urlOptions) as (keyof typeof urlOptions)[]).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });
        return url.slice(0, -1);
    }

    load(method:string, callback: Callback, attributes:PartialAttributes):void {
        fetch(this.makeUrl<PartialAttributes>(attributes), { method })
          .then(this.errorHandler).then((res) => res.json())
          .then((data:Data) => callback(data))
          .catch((err) => console.error(err));
    }

}

export default Loader;