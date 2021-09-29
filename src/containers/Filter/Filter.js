import React, { useState } from "react";
import { Card, TextField } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import { connect } from "react-redux";
import { setTag } from "../../store/actions/filter";

const FilterWrap = styled(Card)({
  marginBottom: "0.5rem",
  padding: "0.5rem",
  background: "#f8f8f8",
  color: "#5a5a65",
});

const CssTextField = styled(TextField)({
  zIndex: 0,
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
  const [tag, setTag] = useState("");

  const handleChange = (e) => {
    const tagText = e.target.value;
    setTag(tagText);
    onSetTag(`#${tagText.trim()}`);
  };

  return (
    <FilterWrap>
      <h3>Filter</h3>
      <CssTextField
        id="note"
        name="note"
        variant="outlined"
        label="write a tag..."
        fullWidth
        value={tag}
        onChange={handleChange}
      />
    </FilterWrap>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    onSetTag: (tag) => dispatch(setTag(tag)),
  };
}

export default connect(null, mapDispatchToProps)(Filter);
