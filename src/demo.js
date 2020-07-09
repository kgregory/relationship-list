import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import AddIcon from "@material-ui/icons/Add";
import FilterListIcon from "@material-ui/icons/FilterList";
import RelationshipCard from "./RelationshipCard";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    paddingBottom: 76
  },
  selection: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
    backgroundColor: blue[200]
  },
  selectionLabel: {
    marginRight: theme.spacing(1),
    minWidth: 100
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  toolbar: {
    marginBottom: theme.spacing(1)
  },
  toolbarTitle: {
    flexGrow: 1,
    padding: theme.spacing(0, 1)
  }
}));

export default function RelationshipList() {
  const classes = useStyles();

  const [userType, setUserType] = React.useState("associate");

  const isManager = userType === "manager";

  const handleChangeUserType = event => {
    setUserType(event.target.value);
  };

  const relationships = [
    {
      name: "Harry Dunn",
      lastActive: "2 days ago",
      createdOn: "6/19/2020",
      description:
        "Harry will introduce himself as Harold, but if he asks you to call him Harry, be prepared to sell anything that isn't nailed down.",
      assignees: ["Dylan Wulf", "Ken Gregory", "Shawn McKnight"]
    },
    {
      name: "Petey",
      lastActive: "6 days ago",
      createdOn: "6/10/2020",
      description: "Beloved parakeet.",
      assignees: ["Dylan Wulf", "Glenn Ryan", "Lloyd Christmas", "Ken Gregory"]
    },
    {
      name: "Mary Samsonite",
      lastActive: "8 days ago",
      createdOn: "6/1/2020",
      description:
        "Can't quite remember her last name, I think she live in Aspen.  She left her luggage here and we've been trying to get it back to her.",
      assignees: ["Lloyd Christmas"]
    },
    {
      name: "Gas Man",
      lastActive: "16 days ago",
      createdOn: "6/1/2020",
      description: null,
      assignees: ["Ken Gregory"]
    }
  ];

  return (
    <>
      <div className={classes.selection}>
        <Typography className={classes.selectionLabel}>User</Typography>
        <Select
          labelId="user-type-select-label"
          id="user-type-select"
          value={userType}
          onChange={handleChangeUserType}
        >
          <MenuItem value="associate">Associate</MenuItem>
          <MenuItem value="manager">Manager</MenuItem>
        </Select>
      </div>
      <div className={classes.root}>
        <Toolbar variant="dense" disableGutters className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.toolbarTitle}
          >
            Assigned Relationships
          </Typography>
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Toolbar>
        {relationships.map(relationship => (
          <RelationshipCard {...relationship} isManager={isManager} />
        ))}
        <Fab color="secondary" aria-label="add" className={classes.fab}>
          <AddIcon />
        </Fab>
      </div>
    </>
  );
}
