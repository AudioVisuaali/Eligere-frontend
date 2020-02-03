import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';

import { SESSION_TOKEN, getItem } from 'utils/localStorage';
import history from 'utils/history';
import { pathLogout } from 'utils/paths';

// Instantiate required constructor fields
const cache = new InMemoryCache();

function generateGraphqlURL() {
  const { protocol, hostname } = window.location;
  return `${protocol}//${hostname}:3001/graphql`;
}

const httpLink = new HttpLink({
  uri: generateGraphqlURL(),
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    Authorization: getItem(SESSION_TOKEN),
  },
}));

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  const isUnAuthenticated =
    graphQLErrors &&
    graphQLErrors.find(error => error.message === 'UNAUTHENTICATED');

  if (isUnAuthenticated) {
    const currentPathName = window.location.pathname;
    history.push({
      pathname: pathLogout,
      state: {
        redirectTo: currentPathName,
      },
    });
  }

  return forward(operation);
});

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

const apolloClient = new ApolloClient({
  cache,
  link: errorLink.concat(authLink.concat(httpLink)),
  defaultOptions,
});

export default apolloClient;
