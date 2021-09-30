import React, { useState, dangerouslySetInnerHTML } from "react";
import { Button, Card, makeStyles, TextField, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { Box } from '@mui/material';
import { styled } from "@mui/material/styles";
import { editNote } from "../../store/actions/board";
import styles from "./ModalEditNote.module.scss";
import ButtonDeleteTag from "../../components/ButtonDeleteTag/ButtonDeleteTag";

const ModalEditNoteWrap = styled(Box)({
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: "grid",
  gridTemplateColumns: "minmax(264px, 400px)",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.5rem",
  background: "rgba(0, 0, 0, 0.5)",
  zIndex: 40,
});

const CssTextField = styled(TextField)({
  "&": {
    margin: "8px 0",
  },
  "& label.Mui-focused": {
    color: "#5A5A65",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#5a5a65",
    },
  },
});

const ButtonAddTag = styled(Button)({
  display: "inline-block",
  height: 56,
  margin: "0.5rem",
  marginRight: 0,
  padding: "0 0.25rem",
  listStyleType: "none",
  borderRadius: 4,
  background: "#5bd497",
  border: "none",
  color: "#ffffff",
  "&:hover": {
    background: "#57cf92",
  },
});

const TagInputWrapper = styled(Box)({
  display: "grid",
  gridTemplateColumns: "auto 100px",
});

const useStyles = makeStyles({
  footer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 8,
  },
});

const ModalEditNote = ({ closeModal, notes, note, onEditNote }) => {
  const { noteDate, noteId, noteTags, noteText } = notes.find(
    (stateNote) => stateNote.noteId === note.noteId
  );
  const [editNoteTags, setEditNoteTags] = useState(noteTags);
  const [addTag, setAddTag] = useState("");
  const classes = useStyles();
  const date = `${noteDate
    .toLocaleTimeString()
    .substring(0, 5)} ${noteDate.toLocaleDateString()}`;
  
  const textWithTags = noteText.replace(
    /#[a-zа-я0-9]+/g, 
    `<span style="display:inline-block;background-color:#5bd497;padding:0 4px;border-radius:4px">$&</span>`
  );
  
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
    <ModalEditNoteWrap
      onSubmit={handleSubmit}
      component="form"
      noValidate
    >
      <Card className={styles.note}>
        <h2 className={styles.note__title}>Edit note</h2>
        <p className={styles.note__date}>{date}</p>
        <Box>
          <h4>Text:</h4>
          <Typography gutterBottom dangerouslySetInnerHTML={{__html: textWithTags}} />
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
        </Box>
        <Box>
          <h4>Tags:</h4>
          <ul className={styles["note__tag-list"]}>
            {editNoteTags.length > 0 ? (
              editNoteTags.map((tag, index) => (
                <li className={styles.note__tag} key={tag + index}>
                  {tag}
                  <ButtonDeleteTag
                    deleteTag={() => deleteTag(tag)}
                  />
                </li>
              ))
            ) : (
              <p>...</p>
            )}
          </ul>
          <TagInputWrapper>
            <CssTextField
              value={addTag}
              onChange={handleChangeTag}
              className={styles.modalEditNote__textInput}
              name="addTag"
              variant="outlined"
              label="Write a tag..."
            />
            <ButtonAddTag
              onClick={onAddTagClick}
              variant="contained"
              key="AddTag"
            >
              Add tag
            </ButtonAddTag>
          </TagInputWrapper>
        </Box>
        <footer className={classes.footer}>
          <Button type="submit" variant="contained" fullWidth>
            Ok
          </Button>
          <Button onClick={() => closeModal()} fullWidth variant="contained">
            Cancel
          </Button>
        </footer>
      </Card>
    </ModalEditNoteWrap>
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
