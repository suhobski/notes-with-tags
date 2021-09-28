import React, { useEffect, useState } from "react";
import { Button, Card } from "@material-ui/core";
import { connect } from "react-redux";
import Filter from "../Filter/Filter";
import Note from "../Note";
import CreateNoteForm from "../CreateNoteForm";
import styles from "./Board.module.scss";

const Board = ({ filterTag, notes }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [buttonRotate, setButtonRotate] = useState(0);
  const [boardNotes, setBoardNotes] = useState(notes);

  const handleModalClick = (e) => {
    if (e.target.classList.contains("MuiCard-root")) {
      setIsOpenModal(false);
      setButtonRotate(0);
    }
  };

  const handleButton = () => {
    if (buttonRotate === 0) setButtonRotate("45deg");
    if (buttonRotate === "45deg") setButtonRotate(0);
    setIsOpenModal(!isOpenModal);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setButtonRotate(0);
  };

  useEffect(() => {
    if (filterTag.length >= 2) {
      setBoardNotes(notes.filter((note) => note.noteTags.includes(filterTag)));
    } else {
      setBoardNotes(notes);
    }
  }, [notes, filterTag]);

  return (
    <Card className={styles.board} style={{ borderRadius: 12 }}>
      <h2 className={styles.board__title}>Board</h2>
      <Filter />
      <Card className={styles.notesWrapper}>
        <h3>Notes</h3>
        {boardNotes.length === 0 ? (
          <p>...</p>
        ) : (
          boardNotes.map((note, index) => (
            <Note note={note} key={note.noteText + index} />
          ))
        )}
      </Card>
      <Button
        className={styles.button}
        variant="contained"
        onClick={handleButton}
        style={{ transform: `rotate(${buttonRotate})` }}
      >
        +
      </Button>
      {isOpenModal ? (
        <Card className={styles.ModalCreateNote} onClick={handleModalClick}>
          <CreateNoteForm closeModal={() => closeModal()} />
        </Card>
      ) : null}
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    notes: state.board.notes,
    filterTag: state.filter.tag,
  };
}

export default connect(mapStateToProps)(Board);
