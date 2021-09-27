import React, { useState } from "react";
import { Button, Card, makeStyles, TextField } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { connect } from "react-redux";
import uid from "uid2";
import { addNote } from "../store/actions/board";

const useStyles = makeStyles((theme) => ({
  createNoteForm: {
    padding: "16px 8px",
    color: "#5A5A65",
    background: "#FFFFFF",
    borderRadius: 12,
  },
  createNoteForm__title: {
    marginBottom: 8,
  },
  textInputWrapper: {
    marginBottom: 8,
    padding: "0 8px",
    background: "#F8F8F8",
    color: "#5A5A65",
  },
  textInput: {
    width: "100%",
    margin: "8px 0",
  },
  "note__tag-list": {},
  note__tag: {
    display: "inline-block",
    margin: "0 8px 8px 0",
    padding: "0 4px",
    listStyleType: "none",
    borderRadius: 4,
    background: "#5A5A65",
    color: "#FFFFFF",
  },
}));

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

const CreateNoteForm = ({ closeModal, onAddNote }) => {
  const classes = useStyles();
  const [note, setNote] = useState("");
  const [tags, setTags] = useState(null);

  const handleChange = (e) => {
    const noteText = e.target.value;
    const noteTags = noteText.match(/#[a-zа-я0-9]+/giu);
    setTags(Array.from(new Set(noteTags)));
    setNote(noteText);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get("note").length > 0) {
      // eslint-disable-next-line no-console
      onAddNote({
        noteId: uid(10),
        noteText: data.get("note"),
        noteTags: tags,
        noteDate: new Date(),
      });
      setNote("");
      setTags(null);
      if (closeModal) closeModal();
    }
  };

  return (
    <Card className={classes.createNoteForm}>
      <h2 className={classes.createNoteForm__title}>Create note</h2>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Card className={classes.textInputWrapper}>
          <CssTextField
            className={classes.textInput}
            id="note"
            name="note"
            variant="outlined"
            label="write note..."
            multiline
            autoFocus
            maxRows={4}
            value={note}
            onChange={handleChange}
          />
        </Card>
        <ul className={classes["note__tag-list"]}>
          {tags &&
            tags.map((tag, index) => (
              <li className={classes.note__tag} key={tag + index}>
                {tag}
              </li>
            ))}
        </ul>
        <Button type="submit" variant="contained" fullWidth>
          Ok
        </Button>
      </Box>
    </Card>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    onAddNote: (note) => dispatch(addNote(note)),
  };
}
export default connect(null, mapDispatchToProps)(CreateNoteForm);
