import { Book } from '.'
import { graphqlOperation } from './graphqlOperation'

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
): Promise<CreateBookReponse> =>
  graphqlOperation<CreateBookReponse>(CREATE_BOOK, variables)

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
): Promise<UpdateBookResponse> =>
  graphqlOperation<UpdateBookResponse>(UPDATE_BOOK, {
    id: variables._id,
    data: {
      title: variables.title,
      description: variables.description,
      author: variables.author
    }
  })

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
): Promise<DeleteBookResponse> =>
  graphqlOperation<DeleteBookResponse>(DELETE_BOOK, { id })
