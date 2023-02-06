import Data from "../../variables";
import { ErrorStatus, Attributes, Callback} from "../../variables"

class Loader{
    private readonly baseLink: string;
    private readonly options: object;
    constructor(baseLink:string, options:object ) {
        this.baseLink = baseLink;
        this.options = options;
    }
    protected getResp(attributes:Attributes,
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

    makeUrl(attributes:Attributes){
        const urlOptions = { ...this.options, ...attributes.options  };
        let url = `${this.baseLink}${attributes.endpoint}?`;
        (Object.keys(urlOptions) as (keyof typeof urlOptions)[]).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });
        return url.slice(0, -1);
    }

    load(method:string, callback: Callback, attributes:Attributes) {
        fetch(this.makeUrl(attributes), { method })
          .then(this.errorHandler).then((res) => res.json())
          .then((data:Data) => callback(data))
          .catch((err) => console.error(err));
    }

}

export default Loader;