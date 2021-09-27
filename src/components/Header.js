import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  Header: {
    padding: 8,
    color: "#5A5A65",
    background: "#FFFFFF",
    borderRadius: 12,
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.Header}>
      <h1>Notes with tags</h1>
    </header>
  );
};

export default Header;
