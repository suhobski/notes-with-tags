import React, { useEffect, useState } from 'react';
import { Button, Card, styled } from '@material-ui/core';
import { connect } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import Note from '../Note';
import ModalWrap from '../../components/UI/ModalWrap';
import CreateNoteForm from '../CreateNoteForm';
import FieldsetWrap from '../../components/UI/FieldsetWrap';
import BoardHeader from './BoardHeader';

const BoardWrap = styled(Card)({
  position: 'relative',
  padding: '1rem 0.5rem',
  borderRadius: 12,
  background: '#ffffff',
  color: '#5a5a65',
  zIndex: 0,
});

const ButtonAddNote = styled(Button)({
  position: 'fixed',
  bottom: 16,
  right: 16,
  padding: 6,
  width: 40,
  textAlign: 'center',
  fontSize: '1.75rem',
  borderRadius: '50%',
  zIndex: 30,
  transition: 'all 0.3s ease-out',
});

const Board = ({ filterTag, notes }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [buttonRotate, setButtonRotate] = useState(0);
  const [boardNotes, setBoardNotes] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const matches = useMediaQuery('(min-width:600px)');

  const handleButton = () => {
    if (buttonRotate === 0) setButtonRotate('45deg');
    if (buttonRotate === '45deg') setButtonRotate(0);
    setIsOpenModal(!isOpenModal);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setButtonRotate(0);
  };

  useEffect(() => {
    const regexp = new RegExp(filterTag, 'i');
    if (filterTag.length >= 2) {
      setBoardNotes(notes.filter((note) => regexp.test(note.noteTags)));
    } else {
      setBoardNotes(notes);
    }
  }, [notes, filterTag]);

  return (
    <BoardWrap>
      <BoardHeader
        isFilterOpen={isFilterOpen}
        setIsFilterOpen={setIsFilterOpen}
      />
      <FieldsetWrap>
        <h2 style={{ marginBottom: 8 }}>Notes</h2>
        {boardNotes.length === 0 ? (
          <p>not found...</p>
        ) : (
          boardNotes.map((note) => <Note note={note} key={note.noteId} />)
        )}
      </FieldsetWrap>
      <ButtonAddNote
        variant="contained"
        onClick={handleButton}
        style={{
          transform: `rotate(${buttonRotate})`,
          display: matches ? 'none' : 'block',
        }}
      >
        +
      </ButtonAddNote>
      {isOpenModal && (
        <ModalWrap onClick={closeModal}>
          <CreateNoteForm closeModal={closeModal} />
        </ModalWrap>
      )}
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
