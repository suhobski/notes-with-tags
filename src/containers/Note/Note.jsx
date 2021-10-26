import React, { useState } from 'react';
import { Card, styled } from '@material-ui/core';
import { connect } from 'react-redux';
import { deleteNote } from '../../store/actions/board';
import ModalEditNote from '../ModalEditNote/ModalEditNote';
import ButtonDeleteNote from '../../components/UI/ButtonDeleteNote/ButtonDeleteNote';
import ButtonEditNote from '../../components/UI/ButtonEditNote/ButtonEditNote';

const NoteWrap = styled(Card)({
  position: 'relative',
  marginBottom: 8,
  padding: 8,
  paddingBottom: 0,
  color: '#5A5A65',
  '&:last-child': {
    marginBottom: 0,
  },
});

const NoteDate = styled('p')({
  fontSize: 12,
  borderRadius: 4,
});

const NoteListTags = styled('ul')({
  margin: 0,
  padding: 0,
});

const Tag = styled('li')({
  display: 'inline-block',
  margin: '0 8px 8px 0',
  padding: '0 4px',
  listStyleType: 'none',
  borderRadius: 4,
  background: '#5a5a65',
  color: '#ffffff',
});

const Note = ({ note, notes, onDeleteNote }) => {
  const [isOpenEditNoteModal, setIsOpenEditNoteModal] = useState(false);
  const { noteDate, noteId, noteTags, noteText } = notes.find(
    (stateNote) => stateNote.noteId === note.noteId
  );
  const date = `${noteDate
    .toLocaleTimeString()
    .substring(0, 5)} ${noteDate.toLocaleDateString()}`;

  return (
    <NoteWrap>
      <ButtonDeleteNote onClick={() => onDeleteNote(noteId)} />
      <ButtonEditNote onClick={() => setIsOpenEditNoteModal(true)} />
      <NoteDate>{date}</NoteDate>
      <p style={{ padding: '8px 0' }}>{noteText}</p>
      <NoteListTags>
        {noteTags && noteTags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </NoteListTags>
      {isOpenEditNoteModal ? (
        <ModalEditNote
          note={note}
          closeModal={() => setIsOpenEditNoteModal(false)}
        />
      ) : null}
    </NoteWrap>
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
