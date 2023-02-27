import { ApolloClient, createHttpLink, InMemoryCache, makeVar } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { LOCAL_STORAGE_TOKEN_KEY } from '../constants';

const API_URL = 'https://cv-project-js.inno.ws/api/graphql';

const httpLink = createHttpLink({
  uri: API_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const userVar = makeVar(undefined);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        user: {
          read() {
            return userVar();
          },
        },
      },
    },
  },
});

export const graphQLClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});
