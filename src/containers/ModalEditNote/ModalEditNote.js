import React, { useState } from "react";
import { Button, Card, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { editNote } from "../../store/actions/board";
import styles from "./ModalEditNote.module.scss";

const CssTextField = styled(TextField)({
  "&": {
    margin: "8px 0",
  },
  "& label.Mui-focused": {
    color: "#5A5A65",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#5A5A65",
    },
  },
});

const ButtonAddTag = styled(Button)({
  "&:hover": {
    background: "#57cf92",
  },
});

const ModalEditNote = ({ closeModal, notes, note, onEditNote }) => {
  const { noteDate, noteId, noteTags, noteText } = notes.find(
    (stateNote) => stateNote.noteId === note.noteId
  );
  const [editNoteTags, setEditNoteTags] = useState(noteTags);
  const [addTag, setAddTag] = useState("");
  const date = `${noteDate
    .toLocaleTimeString()
    .substring(0, 5)} ${noteDate.toLocaleDateString()}`;

  const handleChangeTag = (e) => {
    setAddTag(e.target.value);
  };

  const onAddTagClick = () => {
    if (addTag.length > 0) {
      if (addTag[0] === "#") {
        setEditNoteTags([...editNoteTags, addTag]);
        setAddTag("");
      } else {
        setEditNoteTags([...editNoteTags, `#${addTag}`]);
        setAddTag("");
      }
    }
  };

  const deleteTag = (deleteTag) => {
    const newTags = editNoteTags.filter((tag) => tag !== deleteTag);
    setEditNoteTags(newTags);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get("editNote").length > 0) {
      // eslint-disable-next-line no-console
      onEditNote({
        noteId,
        noteText: data.get("editNote"),
        noteTags: editNoteTags,
        noteDate: new Date(),
      });
      closeModal();
    }
  };

  return (
    <Box
      className={styles.modalEditNote}
      onSubmit={handleSubmit}
      component="form"
      noValidate
    >
      <Card className={styles.note}>
        <h2 className={styles.note__title}>Edit note</h2>
        <p className={styles.note__date}>{date}</p>
        <article>
          <h4>Text:</h4>
          <CssTextField
            className={styles.modalEditNote__textInput}
            id="editNote"
            name="editNote"
            variant="outlined"
            label="Edit text"
            multiline
            maxRows={4}
            fullWidth
            defaultValue={noteText}
          />
        </article>
        <article>
          <h4>Tags:</h4>
          <ul className={styles["note__tag-list"]}>
            {editNoteTags.length > 0 ? (
              editNoteTags.map((tag, index) => (
                <li className={styles.note__tag} key={tag + index}>
                  {tag}
                  <button
                    className={styles["note__tag--delete"]}
                    onClick={() => deleteTag(tag)}
                  />
                </li>
              ))
            ) : (
              <p>...</p>
            )}
          </ul>
          <div className={styles.tagInputWrapper}>
            <CssTextField
              value={addTag}
              onChange={handleChangeTag}
              className={styles.modalEditNote__textInput}
              name="addTag"
              variant="outlined"
              label="Write a tag..."
            />
            <ButtonAddTag
              className={styles["note__tag--addTag"]}
              onClick={onAddTagClick}
              variant="contained"
              key="AddTag"
            >
              Add tag
            </ButtonAddTag>
          </div>
        </article>
        <footer className={styles.footer}>
          <Button type="submit" variant="contained" fullWidth>
            Ok
          </Button>
          <Button onClick={() => closeModal()} fullWidth variant="contained">
            Cancel
          </Button>
        </footer>
      </Card>
    </Box>
  );
};
function mapStateToProps(state) {
  return {
    notes: state.board.notes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onEditNote: (note) => dispatch(editNote(note)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditNote);
