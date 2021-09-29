import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  footer: {
    fontSize: "0.75rem",
    textAlign: "center",
    color: "#ffffff",
    background: "transparent",
  }
});  

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={styles.footer}>
      <p>2021, made by Alex Sukhobski</p>
    </footer>
  );
};

export default Footer;
