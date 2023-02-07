export interface Attributes {
  endpoint: string;
  options: object
}

export interface SourcesTemplate {
  draw(data: Array<PickedSources> | []):void
}

export interface AppTemplate {
  start(): void;
}

export interface NewsTemplate {
  draw(data: Array<Article<string>> | []):void;
}

export interface AppViewTemplate {
  drawNews<Type extends Data>(data: Type) : void;
  drawSources<Type extends Data>(data: Type) : void;
}

export interface AppControllerTemplate {
  getSources<Type extends Callback>(callback: Type):void;
  getNews(e:Event, callback: Callback):void
}

export interface LoaderTemplate{
  readonly baseLink: string;
  readonly options: object;
  getResp(attributes:PartialAttributes,
          callback: Callback):void;
  errorHandler(res:Response):Response;
  makeUrl<Type extends PartialAttributes>(attributes:Type):string;
  load(method:string, callback: Callback, attributes:PartialAttributes):void;

}

export interface Article<Type>{
  author: Type,
  content: Type
  description: Type
  publishedAt: Type,
  source: {
    id: Type,
    name: Type,
  }
  title: Type,
  url: Type,
  urlToImage: Type

}

export interface Source<Type> {
  category: Type,
  country: Type,
  description: Type,
  id: Type,
  language: Type,
  name: Type,
  url: Type
}

type Data ={
  articles: Array<Article<string>> | [],
  sources: Array<PickedSources> | [],
}

// example of use 'Pick'
export type PickedSources = Pick<Source<string>, 'id' | 'name'>
// example of use 'Partial'
export type PartialAttributes = Partial<Attributes>

// example of use 'enum'
export enum ErrorStatus {
  "unauthorized" = 401,
  "notFound" = 404
}

export type Callback = (data:Data) => void

export default Data;