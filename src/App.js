import React, { Component } from "react";

import { Query } from "react-apollo";
import gql from "graphql-tag";

const query = gql`
  query {
    users {
      firstName
      lastName
    }
  }
`;

class App extends Component {
  render() {
    return (
      <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) {
            return "Loading...";
          }
          if (error) {
            return `Error! ${error.message}`;
          }
          return <div className="App">App</div>;
        }}
      </Query>
    );
  }
}

export default App;
