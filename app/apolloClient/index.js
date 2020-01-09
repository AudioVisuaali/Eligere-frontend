import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { SESSION_TOKEN, getItem } from 'utils/localStorage';

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
  link: authLink.concat(httpLink),
  defaultOptions,
});

export default apolloClient;
