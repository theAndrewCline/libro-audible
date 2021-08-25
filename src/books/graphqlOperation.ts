export const graphqlOperation = async <QueryResponse>(
  query: string,
  variables?: any
): Promise<QueryResponse> => {
  const fetchResult = await fetch(process.env.VUE_APP_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      authorization: 'Basic ' + process.env.VUE_APP_FAUNA_SECRET,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, variables })
  })

  const jsonResult = await fetchResult.json()

  return jsonResult
}
