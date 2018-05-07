import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from "./App";
import { InMemoryCache } from "apollo-cache-inmemory";
import React from "react";
import ReactDOM from "react-dom";
import { createHttpLink } from "apollo-link-http";

const client = new ApolloClient({
  link: createHttpLink({ uri: "http://api.githunt.com/graphql" }),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
