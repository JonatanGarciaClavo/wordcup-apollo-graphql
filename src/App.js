import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Home from "./pages/Home";
import MatchDetail from "./pages/MatchDetail";
import { MATCH_PATHNAME } from "./utils/pathnames";

class App extends Component {
  render() {
    return (
      <Grid container justify="center" spacing={16}>
        <Grid item xs={12} lg={9} style={{ marginTop: 20, marginBottom: 20 }}>
          <Switch>
            <Route
              exact
              path={`${MATCH_PATHNAME}/:id`}
              component={MatchDetail}
            />
            <Route component={Home} />
          </Switch>
        </Grid>
      </Grid>
    );
  }
}

export default App;
