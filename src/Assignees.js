import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useChipStyles = makeStyles(theme => ({
  chipBox: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: theme.spacing(1),
    "& > *": {
      margin: theme.spacing(1, 1, 1, 0)
    }
  }
}));

export default function Assignees({ assignees = [] }) {
  const classes = useChipStyles();
  const theme = useTheme();
  const extraSmall = useMediaQuery(theme.breakpoints.down("xs"));

  if (assignees.length === 0) {
    return null;
  }

  if (extraSmall) {
    // limit presentation to 3 chips
    const [first, second, ...rest] = assignees;
    return (
      <div className={classes.chipBox}>
        <Chip label={first} />
        {second != null && <Chip label={second} />}
        {rest.length === 1 && <Chip label={rest[0]} />}
        {rest.length > 1 && <Chip label={`+${rest.length} others`} />}
      </div>
    );
  }

  // present up to 5 chips
  const [first, second, third, fourth, ...rest] = assignees;
  return (
    <div className={classes.chipBox}>
      <Chip label={first} />
      {second && <Chip label={second} />}
      {third && <Chip label={third} />}
      {fourth && <Chip label={fourth} />}
      {rest.length === 1 && <Chip label={rest[0]} />}
      {rest.length > 0 && <Chip label={`+${rest.length} others`} />}
    </div>
  );
}
