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

type UpdateBookInput = {
  _id: string
  title?: string
  description?: string
  author?: string
}

type UpdateBookResponse = {
  data: {
    updateBook: {
      _id: string
      title: string
      description: string
      author: string
    }
  }
  errors: any[]
}

const UPDATE_BOOK = `
  mutation UpdateBook($id: ID!, $data: BookInput!) {
    updateBook(id:$id, data:$data) {
      _id
      title
      description
      author
    }
  }
`

export const updateBook = async (
  variables: UpdateBookInput
): Promise<UpdateBookResponse> => {
  const fetchResult = await fetch(process.env.VUE_APP_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      authorization: 'Basic ' + process.env.VUE_APP_FAUNA_SECRET,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query: UPDATE_BOOK, variables })
  })

  const result = await fetchResult.json()

  return result
}

type DeleteBookInput = string

type DeleteBookResponse = {
  data: {
    deleteBook: {
      _id: string
    }
  }
  errors: any[]
}

const DELETE_BOOK = `
  mutation DeleteBook($id: ID!) {
    deleteBook(id:$id) {
      _id
    }
  }
`

export const deleteBook = async (
  id: DeleteBookInput
): Promise<DeleteBookResponse> => {
  const fetchResult = await fetch(process.env.VUE_APP_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      authorization: 'Basic ' + process.env.VUE_APP_FAUNA_SECRET,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query: DELETE_BOOK, variables: { id } })
  })

  const result = await fetchResult.json()

  return result
}
