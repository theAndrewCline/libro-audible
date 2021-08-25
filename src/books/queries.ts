import { Book } from '.'
import { graphqlOperation } from './graphqlOperation'

type ListBooksQuery = {
  data: Book[]
  errors: any[]
}

export const listBooks = async (): Promise<ListBooksQuery> => {
  const LIST_BOOKS_QUERY = `
    query ListBooks {
      books {
        data {
          _id
          author
          title
          description
        }
      }
    }
  `

  return graphqlOperation<ListBooksQuery>(LIST_BOOKS_QUERY)
}

type GetBookQuery = {
  data: {
    findBookByID: Book
  }
  errors: any[]
}

export const getBook = async (): Promise<GetBookQuery> => {
  const GET_BOOK_QUERY = `
    query GetBook($id:ID!) { 
      findBookByID(id: ID!) { 
        _id 
        title 
        description 
        author
      } 
    }
  `

  return graphqlOperation<GetBookQuery>(GET_BOOK_QUERY)
}
