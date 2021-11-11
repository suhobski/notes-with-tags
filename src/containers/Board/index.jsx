import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import Note from '../Note';
import ModalWrap from '../../components/UI/ModalWrap';
import FieldsetWrap from '../../components/UI/FieldsetWrap';
import BoardHeader from './BoardHeader';
import BoardWrap from './BoardWrap';
import ButtonAddNote from './ButtonAddNote';
import CreateNoteForm from '../CreateNoteForm';

const Board = ({ filterTag, notes }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [buttonRotate, setButtonRotate] = useState(0);
  const [boardNotes, setBoardNotes] = useState([]);
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
    const regexp = new RegExp(`#${filterTag}`, 'i');

    if (filterTag.length) {
      setBoardNotes(notes.filter((note) => regexp.test(note.noteTags)));
    } else {
      setBoardNotes(notes);
    }
  }, [notes, filterTag]);

  return (
    <BoardWrap>
      <BoardHeader />
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

Board.defaultProps = {
  notes: [],
  filterTag: '',
};

Board.propTypes = {
  filterTag: PropTypes.string,
  notes: PropTypes.arrayOf(PropTypes.object),
};

function mapStateToProps(state) {
  return {
    notes: state.board.notes,
    filterTag: state.filter.filterTag,
  };
}

export default connect(mapStateToProps)(Board);
