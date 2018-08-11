import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { HOMEPAGE_PATHNAME } from "./utils/pathnames";

const client = new ApolloClient({
  uri: "https://worldcup-2018.now.sh/"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Route path={HOMEPAGE_PATHNAME} component={App} />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
