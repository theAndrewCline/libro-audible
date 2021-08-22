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
