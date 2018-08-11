import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  media: {
    height: 'auto',
    paddingTop: "56.25%" // 16:9
  },
};

function MatchCard({ name, image, score, goals, classes }) {
  return (
    <Card>
      <CardMedia className={classes.media} image={image} title={name} />
      <CardContent>
        <Typography align="center" gutterBottom variant="display1" component="h2">
          {name}
        </Typography>
        <Typography align="center" gutterBottom variant="display4" component="h1">
          {score}
        </Typography>
        {goals.map((goal, key) => (
          <Typography key={key} gutterBottom variant="body1">
          {`${goal.time} ${goal.scorer.name}`}
        </Typography>
        ))}
      </CardContent>
    </Card>
  );
}

MatchCard.defaultProps = {
  goals: [],
};

export default withStyles(styles)(MatchCard);
