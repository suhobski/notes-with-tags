import React, { useEffect, useState } from "react";
import { Button, Card, makeStyles, styled } from "@material-ui/core";
import { connect } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import Filter from "../../Filter/Filter";
import Note from "../../Note/Note";
import ModalCreateNote from "../../ModalCreateNote/ModalCreateNote";

const BoardWrap = styled(Card)({
  position: "relative",
  padding: "1rem 0.5rem",
  borderRadius: 12,
  background: "#ffffff",
  zIndex: 0,
});

const NotesWrapper = styled(Card)({
  padding: "0.5rem",
  background: "#f8f8f8",
  color: "#5a5a65",
});

const ButtonAddNote = styled(Button)({
  position: "fixed",
  bottom: 16,
  right: 16,
  padding: 6,
  width: 40,
  textAlign: "center",
  fontSize: "1.75rem",
  borderRadius: "50%",
  zIndex: 30,
  transition: "all 0.3s ease-out",
});

const useStyles = makeStyles({
  board__title: {
    marginBottom: "0.5rem",
    color: "#5a5a65",
  },
});

const Board = ({ filterTag, notes }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [buttonRotate, setButtonRotate] = useState(0);
  const [boardNotes, setBoardNotes] = useState([]);
  const matches = useMediaQuery("(max-width:600px)");
  const classes = useStyles();

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
    <BoardWrap>
      <h2 className={classes.board__title}>Board</h2>
      <Filter />
      <NotesWrapper>
        <h3>Notes</h3>
        {boardNotes.length === 0 ? (
          <p>...</p>
        ) : (
          boardNotes.map((note, index) => (
            <Note note={note} key={note.noteText + index} />
          ))
        )}
      </NotesWrapper>
      <ButtonAddNote
        variant="contained"
        onClick={handleButton}
        style={{
          transform: `rotate(${buttonRotate})`,
          display: matches ? "block" : "none",
        }}
      >
        +
      </ButtonAddNote>
      {isOpenModal ? (
        <ModalCreateNote
          handleModalClick={(e) => handleModalClick(e)}
          closeModal={() => closeModal()}
        />
      ) : null}
    </BoardWrap>
  );
};

function mapStateToProps(state) {
  return {
    notes: state.board.notes,
    filterTag: state.filter.tag,
  };
}

export default connect(mapStateToProps)(Board);
