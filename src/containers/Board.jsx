import React, { useEffect, useState } from 'react';
import { Button, Card, styled } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { connect } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/system';
import Filter from './Filter';
import Note from './Note';
import ModalWrap from '../components/UI/ModalWrap';
import CreateNoteForm from './CreateNoteForm';
import FieldsetWrap from '../components/UI/FieldsetWrap';

const BoardWrap = styled(Card)({
  position: 'relative',
  padding: '1rem 0.5rem',
  borderRadius: 12,
  background: '#ffffff',
  color: '#5a5a65',
  zIndex: 0,
});

const BoardHeader = styled(Box)({
  height: 48,
  display: 'grid',
  gridTemplateColumns: '1fr minmax(70px, 270px)',
  justifyContent: 'space-between',
});

const SearchTagButton = styled(IconButton)({
  position: 'absolute',
  top: 10,
  right: 8,
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

const BoardTitle = styled('h2')({
  marginBottom: '0.5rem',
  color: '#5a5a65',
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
    if (filterTag.length >= 2) {
      setBoardNotes(notes.filter((note) => note.noteTags.includes(filterTag)));
    } else {
      setBoardNotes(notes);
    }
  }, [notes, filterTag]);

  return (
    <BoardWrap>
      <BoardHeader>
        <BoardTitle>Board</BoardTitle>
        {!isFilterOpen && (
          <SearchTagButton
            style={{ position: 'absolute' }}
            size="large"
            onClick={() => setIsFilterOpen(true)}
          >
            <SearchIcon />
          </SearchTagButton>
        )}
        {isFilterOpen && <Filter closeFilter={() => setIsFilterOpen(false)} />}
      </BoardHeader>
      <FieldsetWrap>
        <h3>Notes</h3>
        {boardNotes.length === 0 ? (
          <p>haven&apos;t been written yet</p>
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
