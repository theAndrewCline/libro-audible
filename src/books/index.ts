export type Book = {
  _id: string
  title?: string
  description?: string
  author?: string
}

export { createBook } from './mutations'
export { listBooks } from './queries'
