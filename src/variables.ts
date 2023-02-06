type Data ={
  articles: Array<Article> | [],
  sources: Array<Source> | [],
}

export interface Attributes {
  endpoint: string;
  options?: object
}

export interface Article{
  author: string,
  content: string
  description: string
  publishedAt: string,
  source: {
    id: string,
    name: string,
  }
  title: string,
  url: string,
  urlToImage: string

}

export interface Source {
  category: string,
  country: string,
  description: string,
  id: string,
  language: string,
  name: string,
  url: string
}

export enum ErrorStatus {
  "unauthorized" = 401,
  "notFound" = 404
}
export type Callback = (data:Data) => void

export default Data;