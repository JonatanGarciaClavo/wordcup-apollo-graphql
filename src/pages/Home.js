import React from "react";
import compose from "recompose/compose";
import withStateHandlers from "recompose/withStateHandlers";
import { Query } from "react-apollo";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
import isFuture from "date-fns/is_future";
import isPast from "date-fns/is_past";
import isBefore from "date-fns/is_before";
import FLAG_IMAGES from "../utils/flagImages";
import { MATCH_PATHNAME } from "../utils/pathnames";
import {
  GROUP_A,
  GROUP_B,
  GROUP_C,
  GROUP_D,
  GROUP_E,
  GROUP_F,
  GROUP_G,
  GROUP_H,
  ROUND_16,
  QUARTER_FINALS,
  SEMI_FINALS,
  QUERIES
} from "../utils/rounds";

const styles = {
  gridItem: {
    padding: 0,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  gridList: {
    width: "100%",
    paddingTop: "25px",
    paddingBottom: "25px"
  }
};

function getScore(homeScore, awayScore, date) {
  if (homeScore === null && awayScore === null) {
    return distanceInWordsToNow(date);
  }
  return `${homeScore} - ${awayScore}`;
}

function sortMatches(matches) {
  return matches.sort((a, b) => {
    if (isFuture(a.date) && isFuture(b.date)) {
      if (isBefore(a.date, b.date)) {
        return 1;
      } else if (isBefore(b.date, a.date)) {
        return -1;
      }
      return 0;
    } else if (isPast(a.date) && isPast(b.date)) {
      if (isBefore(a.date, b.date)) {
        return 1;
      } else if (isBefore(b.date, a.date)) {
        return -1;
      }
      return 0;
    } else if (isBefore(a.date, b.date)) {
      return 1;
    } else if (isBefore(b.date, a.date)) {
      return -1;
    }
    return 0;
  });
}

function Home({ classes, history, selectedTab, handleTabChange }) {
  return (
    <div>
      <Grid container>
        <Grid className={classes.gridItem} item xs={12}>
          <Card>
            <CardMedia
              className={classes.media}
              image="/wordcup-header.png"
              title="Russia wordcup"
            />
            <CardContent>
              <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                indicatorColor="primary"
                textColor="primary"
                scrollable
                scrollButtons="auto"
              >
                <Tab label="Semi finals" value={SEMI_FINALS} />
                <Tab label="Quarter finals" value={QUARTER_FINALS} />
                <Tab label="Round of 16" value={ROUND_16} />
                <Tab label="Group A" value={GROUP_A} />
                <Tab label="Group B" value={GROUP_B} />
                <Tab label="Group C" value={GROUP_C} />
                <Tab label="Group D" value={GROUP_D} />
                <Tab label="Group E" value={GROUP_E} />
                <Tab label="Group F" value={GROUP_F} />
                <Tab label="Group G" value={GROUP_G} />
                <Tab label="Group H" value={GROUP_H} />
              </Tabs>
              <Query query={QUERIES[selectedTab]}>
                {({ loading, error, data }) => {
                  if (loading) return <p>Loading...</p>;
                  if (error) return <p>Error :(</p>;
                  const matches = sortMatches([...data.worldcups[0].matches]);
                  return (
                    <GridList
                      cellHeight={180}
                      cols={2}
                      spacing={16}
                      className={classes.gridList}
                    >
                      {matches.map(
                        ({
                          homeTeam,
                          awayTeam,
                          id,
                          homeScore,
                          awayScore,
                          date
                        }) => (
                          <GridListTile
                            key={id}
                            onClick={() => {
                              history.push(`${MATCH_PATHNAME}/${id}`);
                            }}
                          >
                            <GridList>
                              <GridListTile key={`${id}-${homeTeam.code}`}>
                                <img
                                  src={FLAG_IMAGES[homeTeam.code]}
                                  alt={homeTeam.name}
                                />
                              </GridListTile>
                              <GridListTile key={`${id}-${awayTeam.code}`}>
                                <img
                                  src={FLAG_IMAGES[awayTeam.code]}
                                  alt={awayTeam.name}
                                />
                              </GridListTile>
                            </GridList>
                            <GridListTileBar
                              title={`${homeTeam.code} vs ${awayTeam.code}`}
                              subtitle={getScore(homeScore, awayScore, date)}
                            />
                          </GridListTile>
                        )
                      )}
                    </GridList>
                  );
                }}
              </Query>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default compose(
  withStyles(styles),
  withStateHandlers(
    { selectedTab: SEMI_FINALS },
    { handleTabChange: () => (e, value) => ({ selectedTab: value }) }
  )
)(Home);
