export interface Attributes {
  endpoint: string;
  options: object;
}
// interfaces which describing classes
export interface SourcesTemplate {
  draw(data: Array<PickedSources>):void
}

export interface NewsTemplate {
  draw(data: Array<Article<string>>):void;
}

export interface AppTemplate {
  start(): void;
}

// example of use generic functions
export interface AppViewTemplate {
  drawNews<Type extends Data>(data: Type): void;
  drawSources<Type extends Data>(data: Type): void;
}

export interface AppControllerTemplate {
  getSources<Type extends Callback>(callback: Type): void;
  getNews(e:Event, callback: Callback):void
}

export interface LoaderTemplate{
  readonly baseLink: string;
  readonly options: object;
  getResp(attributes:PartialAttributes,
          callback: Callback):void;
  //  example of use union type
  errorHandler(res:Response):Response | never;
  makeUrl<Type extends PartialAttributes>(attributes:Type): string;
  load(method:string | undefined, callback: Callback, attributes:PartialAttributes): void;

}

// generic object type
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

// generic object  type
export interface Source<Type> {
  category: Type,
  country: Type,
  description: Type,
  id: Type,
  language: Type,
  name: Type,
  url: Type
}

// alias
type Data ={
  articles: Array<Article<string>>,
  sources: Array<PickedSources>,
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