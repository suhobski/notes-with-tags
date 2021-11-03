import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, styled, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { deleteNote } from '../store/actions/board';
import ModalEditNote from './ModalEditNote/ModalEditNote';
import ButtonDeleteNote from '../components/UI/ButtonDeleteNote';
import ButtonEditNote from '../components/UI/ButtonEditNote';
import TagList from '../components/TagList';
import NoteText from '../components/UI/NoteText';

const NoteWrap = styled(Card)({
  position: 'relative',
  marginBottom: '0.5rem',
  padding: '0.5rem 0.5rem 0',
  color: '#5A5A65',
  '&:last-child': {
    marginBottom: 0,
  },
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
        deleteNote={() => onDeleteNote(noteId)}
        sx={{
          position: 'absolute',
          top: 0,
          right: 4,
        }}
      />
      <ButtonEditNote
        openEditModal={() => setIsOpenEditNoteModal(true)}
        sx={{
          position: 'absolute',
          top: 0,
          right: 50,
        }}
      />
      <Typography variant="body2">{date}</Typography>
      <NoteText>{noteText}</NoteText>
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

Note.propTypes = {
  note: PropTypes.PropTypes.shape({
    noteId: PropTypes.string,
    noteText: PropTypes.string,
    noteTags: PropTypes.arrayOf(PropTypes.string),
    noteDate: PropTypes.instanceOf(Date),
  }).isRequired,
  onDeleteNote: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    onDeleteNote: (id) => dispatch(deleteNote(id)),
  };
}

export default connect(null, mapDispatchToProps)(Note);
