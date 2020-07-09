import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ArchiveIcon from "@material-ui/icons/Archive";
import Assignees from "./Assignees";

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: red[500]
  },
  /** from: http://hackingui.com/front-end/a-pure-css-solution-for-multiline-text-truncation/ */
  descriptionSummary: {
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical"
  },
  card: {
    position: "relative",
    marginBottom: theme.spacing(2)
  },
  cardHeaderAction: {
    position: "absolute",
    right: 0,
    top: 0,
    margin: theme.spacing(1)
  }
}));

export default function RelationshipCard({
  isManager,
  name,
  lastActive,
  createdOn,
  description,
  assignees
}) {
  const classes = useStyles();

  const handleArchive = () => {};

  const handleDetails = () => {};

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={handleDetails}>
        <CardHeader
          avatar={
            <Avatar aria-label={name} className={classes.avatar}>
              {name
                .split(" ")
                .map(part => part.substring(0, 1))
                .slice(0, 2)
                .join("")}
            </Avatar>
          }
          title={`${name} — ${lastActive}`}
          subheader={`Created ${createdOn}`}
        />
        <CardContent>
          <Typography
            className={classes.descriptionSummary}
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            {description ?? <em>No Description</em>}
          </Typography>
          {isManager && <Assignees assignees={assignees} />}
        </CardContent>
      </CardActionArea>
      {!isManager && (
        <IconButton
          onClick={handleArchive}
          aria-label="archive this relationship"
          className={classes.cardHeaderAction}
        >
          <ArchiveIcon />
        </IconButton>
      )}
    </Card>
  );
}
