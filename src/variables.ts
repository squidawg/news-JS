export interface Attributes {
  endpoint: string;
  options: object
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

export type PickedSources = Pick<Source<string>, 'id' | 'name'>
export type PartialAttributes = Partial<Attributes>

export enum ErrorStatus {
  "unauthorized" = 401,
  "notFound" = 404
}

export type Callback = (data:Data) => void

export default Data;