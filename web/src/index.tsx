import React from 'react';
import ReactDOM from 'react-dom';
import { Application } from './Application';
import { ChakraProvider } from "@chakra-ui/react"
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink, from  } from '@apollo/react-hooks';
import { onError } from "@apollo/client/link/error";

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "include"
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});



const client : any = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache({}),
}); 

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Application />
      </ChakraProvider>
    </ApolloProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);
