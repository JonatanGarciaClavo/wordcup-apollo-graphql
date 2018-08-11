import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { withStyles } from "@material-ui/core/styles";
import MatchCard from "./matchdetail/MatchCard";
import FLAG_IMAGES from "../utils/flagImages";

const styles = {
  gridList: {
    width: "100%",
    paddingTop: "20px",
    paddingBottom: "20px",
  }
};

function filterGoals(goals, teamId) {
  return goals.filter((goal) => {
    let isInTheTeam = false;
    goal.scorer.squads.forEach((squad) => {
      if (squad.country.id === teamId) {
        isInTheTeam = true;
        return;
      }
    });
    return isInTheTeam;
  })
}

function sortGoals(goals) {
  return goals.sort((a, b) => {
    const splitTimeA = a.time.split('\'');
    const splitTimeB = b.time.split('\'');
    const timeA = parseInt(splitTimeA[0], 10);
    const extraTimeA = splitTimeA.length > 2 ? parseInt(splitTimeA[1], 10) : null;
    const extraTimeB = splitTimeB.length > 2 ? parseInt(splitTimeB[1], 10) : null;
    const timeB = parseInt(splitTimeB[0], 10);
    if (timeA < timeB) {
      return -1;
    } else if (timeA > timeB) {
      return 1;
    } else if (extraTimeA && extraTimeB) {
      if (extraTimeA < extraTimeB) {
        return -1;
      } else if (extraTimeA > extraTimeB) {
        return 1;
      }
    }
    return 0;
  })
}

const MATCH_DETAIL_QUERY = gql`
query matches($id: Int) {
  matches(id: $id) {
    id
    homeScore
    awayScore
    homePenalties
    awayPenalties
    homeTeam {
      id
      name
      code
    }
    awayTeam {
      id
      name
      code
    }
    goals {
      type
      time
      scorer {
        id
        name
        squads {
          country {
            id
          }
        }
      }
    }
  }
}
`;

function MatchDetail({ match, classes }) {
  return (
    <Query
      query={MATCH_DETAIL_QUERY}
      variables={{ id: parseInt(match.params.id, 10) }}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        const { homeScore, awayScore, homeTeam, awayTeam, goals } = data.matches[0];
        return (
          <GridList className={classes.gridList} cols={2} spacing={16}>
            <GridListTile key="home" style={{ height: "auto" }}>
              <MatchCard
                score={homeScore}
                name={homeTeam.name}
                image={FLAG_IMAGES[homeTeam.code]}
                goals={sortGoals(filterGoals(goals, homeTeam.id))}
              />
            </GridListTile>
            <GridListTile key="away" style={{ height: "auto" }}>
              <MatchCard
                score={awayScore}
                name={awayTeam.name}
                image={FLAG_IMAGES[awayTeam.code]}
                goals={sortGoals(filterGoals(goals, awayTeam.id))}
              />
            </GridListTile>
          </GridList>
        );
      }}
    </Query>
  );
}

export default withStyles(styles)(MatchDetail);
