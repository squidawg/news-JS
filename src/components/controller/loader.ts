
// enum for eeror handling
enum ErrorStatus {
    "unauthorized" = 401,
    "notFound" = 404
}
// attr for methods inside class Loader
interface Endpoint {
    endpoint: string,
}
interface Options {
    option: object
}


class Loader implements Endpoint, Options{
    private readonly baseLink: string;
    private readonly options: object;
    constructor(baseLink:string, options:object) {
        this.baseLink = baseLink;
        this.options = options;
    }

    option: object= {};

    endpoint =  '';


    getResp({endpoint = '', options = {}},
        callback: () => void = () => {
            console.error('No callback for GET response');
        }
    ):void {
        this.load('GET', callback, options, endpoint);
    }

    errorHandler(res:Response):Response {
        if (!res.ok) {
            if (res.status === ErrorStatus.unauthorized || res.status === ErrorStatus.notFound)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options:object, endpoint: string){
        const urlOptions = { ...this.options, ...options  };
        let url = `${this.baseLink}${endpoint}?`;
        (Object.keys(urlOptions) as (keyof typeof urlOptions)[]).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });
        return url.slice(0, -1);
    }

    load(method:string, callback: (n?: string) => void, options: object = {}, endpoint: string) {
        fetch(this.makeUrl(options, endpoint), { method })
          .then(this.errorHandler).then((res) => res.json())
          .then((data:string) => callback(data))
          .catch((err) => console.error(err));
    }

}

export default Loader;