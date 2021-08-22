import { Book } from '.'

type CreateBookInput = {
  title: string
  description?: string
  author: string
}

type CreateBookReponse = {
  data: {
    createBook: Book
  }
  errors: any[]
}

const CREATE_BOOK = `
  mutation CreateBook($title: String!, $description: String, $author: String) {
    createBook(
      data: { title: $title, description: $description, author: $author }
    ) {
      _id
      title
      description
      author
    }
  }
`

export const createBook = async (
  variables: CreateBookInput
): Promise<CreateBookReponse> => {
  const fetchResult = await fetch(process.env.VUE_APP_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      authorization: 'Basic ' + process.env.VUE_APP_FAUNA_SECRET,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query: CREATE_BOOK, variables })
  })

  const result = await fetchResult.json()

  return result
}
