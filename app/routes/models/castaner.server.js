
export async function getGraphqlData(graphql) {
    const response = await graphql(
        `
        query {
          customers(first:10) {
            edges {
              node {
                id
                displayName
                tags
                
              }
            }
          }
        }
      `
    );

    return response.json();
}
