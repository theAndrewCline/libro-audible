export type Book = {
  _id: string
  title?: string
  description?: string
  author?: string
}

export { createBook, updateBook, deleteBook } from './mutations'
export { listBooks, getBook } from './queries'
