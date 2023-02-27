import { ApolloClient, InMemoryCache } from '@apollo/client';
// import { GraphQLClient } from "graphql-request";

const API_URL = 'https://cv-project-js.inno.ws/api/graphql';

export const graphQLClient = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
  // headers: {
  //   Authorization: `Bearer ${process.env.API_KEY}`
  // }
});
