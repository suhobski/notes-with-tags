import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    padding: "0.5rem",
    color: "#5a5a65",
    background: "#ffffff",
    borderRadius: "0.75rem",
  }
});  

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <h1>Notes with tags</h1>
    </header>
  );
};

export default Header;
