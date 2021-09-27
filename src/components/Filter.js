import React, { useState } from "react";
import { Card, makeStyles, TextField } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import { connect } from "react-redux";
import { setTag } from "../store/actions/filter";

const useStyles = makeStyles({
  root: {
    marginBottom: 8,
    padding: 8,
    background: "#F8F8F8",
  },
});

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#5A5A65",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#5A5A65",
    },
  },
});

const Filter = ({ onSetTag }) => {
  const classes = useStyles();
  const [tag, setTag] = useState("");

  const handleChange = (e) => {
    const tagText = e.target.value;
    setTag(tagText);
    onSetTag(`#${tagText.trim()}`);
  };

  return (
    <Card className={classes.root}>
      <CssTextField
        className={classes.textInput}
        id="note"
        name="note"
        variant="outlined"
        label="write a tag..."
        fullWidth
        value={tag}
        onChange={handleChange}
      />
    </Card>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    onSetTag: (tag) => dispatch(setTag(tag)),
  };
}

export default connect(null, mapDispatchToProps)(Filter);
