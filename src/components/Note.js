import React, { useState } from "react";
import { Card, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { deleteNote } from "../store/actions/board";
import ModalEditNote from "./ModalEditNote";

const useStyles = makeStyles({
  note: {
    position: "relative",
    marginBottom: 8,
    padding: 8,
    paddingBottom: 0,
    color: "#5A5A65",
    "&:last-child": {
      marginBottom: 0,
    },
  },
  note__text: {
    padding: "8px 0",
  },
  note__date: {
    fontSize: 12,
    borderRadius: 4,
  },
  "note__tag-list": {
    margin: 0,
  },
  note__tag: {
    display: "inline-block",
    margin: "0 8px 8px 0",
    padding: "0 4px",
    listStyleType: "none",
    borderRadius: 4,
    background: "#5A5A65",
    color: "#FFFFFF",
  },
  "note__button--edit": {
    position: "absolute",
    top: 6,
    right: 40,
    width: 24,
    height: 24,
    outline: "none",
    borderRadius: 32,
    border: "none",
    background: "url(./img/pen.png) no-repeat center",
    backgroundSize: "17px",
    cursor: "pointer",
    transition: "all .3s ease-out",
    "&:active": {
      backgroundColor: "#e0e0e0",
    },
  },
  "note__button--delete": {
    position: "absolute",
    top: 6,
    right: 8,
    width: 24,
    height: 24,
    outline: "none",
    borderRadius: 32,
    border: "none",
    background: "url(./img/trash.png) no-repeat center",
    backgroundSize: "17px",
    cursor: "pointer",
    transition: "all .3s ease-out",
    "&:active": {
      backgroundColor: "#e0e0e0",
    },
  },
});

const Note = ({ note, notes, onDeleteNote }) => {
  const classes = useStyles();
  const [isOpenEditNoteModal, setIsOpenEditNoteModal] = useState(false);
  const { noteDate, noteId, noteTags, noteText } = notes.find(
    (stateNote) => stateNote.noteId === note.noteId
  );
  const date = `${noteDate
    .toLocaleTimeString()
    .substring(0, 5)} ${noteDate.toLocaleDateString()}`;

  return (
    <Card className={classes.note}>
      <button
        className={classes["note__button--delete"]}
        onClick={() => onDeleteNote(noteId)}
      />
      <button
        className={classes["note__button--edit"]}
        onClick={() => setIsOpenEditNoteModal(true)}
      />
      <p className={classes.note__date}>{date}</p>
      <p className={classes.note__text}>{noteText}</p>
      <ul className={classes["note__tag-list"]}>
        {noteTags &&
          noteTags.map((tag, index) => (
            <li className={classes.note__tag} key={tag + index}>
              {tag}
            </li>
          ))}
      </ul>
      {isOpenEditNoteModal ? (
        <ModalEditNote
          note={note}
          closeModal={() => setIsOpenEditNoteModal(false)}
        />
      ) : null}
    </Card>
  );
};
function mapStateToProps(state) {
  return {
    notes: state.board.notes,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onDeleteNote: (id) => dispatch(deleteNote(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);
