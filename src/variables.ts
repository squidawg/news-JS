type Data ={
  articles: [Article] | [],
  sources: Source,
}

export type Article= {
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
  url: string
}

export default Data;