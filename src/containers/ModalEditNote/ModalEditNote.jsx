import React, { useState } from 'react';
import { Button, Card } from '@material-ui/core';
import { connect } from 'react-redux';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { editNote } from '../../store/actions/board';
import EditText from './EditText';
import EditTags from './EditTags';
import ModalHeader from './ModalHeader';

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

const Modal = styled(Card)({
  margin: '0.5rem',
  padding: '1rem',
  color: '#5a5a65',
});

const ModalFooter = styled('footer')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 8,
});

const ModalEditNote = ({ closeModal, note, onEditNote }) => {
  const { noteDate, noteId, noteTags, noteText } = note;
  const [newTags, setNewTags] = useState(noteTags);
  const [newText, setNewText] = useState(noteText);
  const [addTag, setAddTag] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newText.length) {
      onEditNote({
        noteId,
        noteText: newText,
        noteTags: newTags,
        noteDate: new Date(),
      });
      closeModal();
    }
  };

  return (
    <ModalEditNoteWrap onClick={closeModal}>
      <Modal
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        component="form"
        noValidate
      >
        <ModalHeader noteDate={noteDate} />
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
      </Modal>
    </ModalEditNoteWrap>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    onEditNote: (note) => dispatch(editNote(note)),
  };
}

export default connect(null, mapDispatchToProps)(ModalEditNote);
