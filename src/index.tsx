import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const httpLink = createHttpLink({
    uri: 'https://graphqlbolaget.appspot.com/graph'
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

const wrappedApp = (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

ReactDOM.render(wrappedApp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
