import { RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import { router } from './routes';
import { graphQLClient } from './api';

import './index.scss';

const App = () => (
  <ApolloProvider client={graphQLClient}>
    <RouterProvider router={router} />
  </ApolloProvider>
);

export default App;
