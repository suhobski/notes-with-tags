import React, { useState } from 'react';
import { Card, styled } from '@material-ui/core';
import { connect } from 'react-redux';
import Typography from '@mui/material/Typography';
import { deleteNote } from '../store/actions/board';
import ModalEditNote from './ModalEditNote/ModalEditNote';
import ButtonDeleteNote from '../components/UI/ButtonDeleteNote';
import ButtonEditNote from '../components/UI/ButtonEditNote';
import TagList from '../components/TagList';

const NoteWrap = styled(Card)({
  position: 'relative',
  marginBottom: '0.5rem',
  padding: '0.5rem 0.5rem 0',
  border: '1px solid #cccccc',
  color: '#5A5A65',
  '&:last-child': {
    marginBottom: 0,
  },
});

const NoteDate = styled('p')({
  fontSize: 12,
  borderRadius: 4,
});

const Note = ({ note, onDeleteNote }) => {
  const [isOpenEditNoteModal, setIsOpenEditNoteModal] = useState(false);
  const { noteDate, noteId, noteTags, noteText } = note;
  const date = `${noteDate
    .toLocaleTimeString()
    .substring(0, 5)} ${noteDate.toLocaleDateString()}`;

  return (
    <NoteWrap>
      <ButtonDeleteNote
        onClick={() => onDeleteNote(noteId)}
        sx={{
          position: 'absolute',
          top: 0,
          right: 4,
        }}
      />
      <ButtonEditNote
        onClick={() => setIsOpenEditNoteModal(true)}
        sx={{
          position: 'absolute',
          top: 0,
          right: 50,
        }}
      />
      <NoteDate>{date}</NoteDate>
      <Typography variant="body1" py="8px">
        {noteText}
      </Typography>
      {noteTags.length > 0 && <TagList tags={noteTags} />}
      {isOpenEditNoteModal ? (
        <ModalEditNote
          note={note}
          closeModal={() => setIsOpenEditNoteModal(false)}
        />
      ) : null}
    </NoteWrap>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    onDeleteNote: (id) => dispatch(deleteNote(id)),
  };
}

export default connect(null, mapDispatchToProps)(Note);
