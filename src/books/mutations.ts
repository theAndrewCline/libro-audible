type CreateBookInput = {
  title: string;
  description?: string;
  author: string;
}

const CREATE_BOOK  = `
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

export const createBook = async (variables: CreateBookInput) => {
  const fetchResult = await fetch(process.env.VUE_APP_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      authorization: 'Basic ' + process.env.VUE_APP_FAUNA_SECERT,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query: CREATE_BOOK, variables})
  })

  return fetchResult
}
