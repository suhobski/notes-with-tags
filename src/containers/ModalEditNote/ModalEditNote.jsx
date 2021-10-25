import React, { useMemo, useState } from 'react';
import { Button, Card } from '@material-ui/core';
import { connect } from 'react-redux';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { editNote } from '../../store/actions/board';
import EditText from './EditText/EditText';
import EditTags from './EditTags/EditTags';

const ModalEditNoteWrap = styled(Box)({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'grid',
  gridTemplateColumns: 'minmax(264px, 500px)',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.5rem',
  background: 'rgba(0, 0, 0, 0.5)',
  zIndex: 40,
});

const NoteWrap = styled(Card)({
  marginBottom: '0.5rem',
  padding: '1rem',
  color: '#5a5a65',
});

const NoteTitle = styled('h2')({
  marginBottom: '0.5rem',
});

const NoteDate = styled('p')({
  fontSize: '0.75rem',
  borderRadius: 4,
  marginBottom: '0.5rem',
});

const ModalFooter = styled('footer')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 8,
});

const ModalEditNote = ({ closeModal, notes, note, onEditNote }) => {
  const { noteDate, noteId, noteTags, noteText } = notes.find(
    (stateNote) => stateNote.noteId === note.noteId
  );
  const [newTags, setNewTags] = useState(noteTags);
  const [newText, setNewText] = useState(noteText);
  const [addTag, setAddTag] = useState('');

  const date = useMemo(
    () =>
      `${noteDate
        .toLocaleTimeString()
        .substring(0, 5)} ${noteDate.toLocaleDateString()}`,
    [noteDate]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get('editNote').length) {
      onEditNote({
        noteId,
        noteText: data.get('editNote'),
        noteTags: newTags,
        noteDate: new Date(),
      });
      if (closeModal) closeModal();
    }
  };

  return (
    <ModalEditNoteWrap
      onSubmit={handleSubmit}
      onClick={closeModal}
      component="form"
      noValidate
    >
      <NoteWrap onClick={(e) => e.stopPropagation()}>
        <NoteTitle>Edit note</NoteTitle>
        <NoteDate>{date}</NoteDate>
        <EditText
          noteText={noteText}
          newText={newText}
          setNewText={setNewText}
        />
        <EditTags
          newTags={newTags}
          setNewTags={setNewTags}
          addTag={addTag}
          setAddTag={setAddTag}
        />
        <ModalFooter>
          <Button type="submit" variant="contained" fullWidth>
            Ok
          </Button>
          <Button onClick={closeModal} fullWidth variant="contained">
            Cancel
          </Button>
        </ModalFooter>
      </NoteWrap>
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
