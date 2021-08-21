export const listBooks = async () => {
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
      authorization: 'Basic ' + process.env.VUE_APP_FAUNA_SECERT,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query: LIST_BOOKS_QUERY })
  })

  const jsonResult = await fetchResult.json()

  return jsonResult
}
