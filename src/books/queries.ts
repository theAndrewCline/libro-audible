import { Book } from '.'

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

  const fetchResult = await fetch(process.env.VUE_APP_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      authorization: 'Basic ' + process.env.VUE_APP_FAUNA_SECRET,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query: LIST_BOOKS_QUERY })
  })

  const jsonResult = await fetchResult.json()

  return jsonResult
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

  const fetchResult = await fetch(process.env.VUE_APP_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      authorization: 'Basic ' + process.env.VUE_APP_FAUNA_SECERT,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query: GET_BOOK_QUERY })
  })

  const jsonResult = await fetchResult.json()

  return jsonResult
}
