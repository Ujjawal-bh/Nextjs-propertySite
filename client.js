import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
const link = createHttpLink({
  uri: process.env.WP_GRAPHQL_URL
})
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;


