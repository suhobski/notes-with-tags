import React, { useState } from 'react';
import { Button, Card } from '@material-ui/core';
import { connect } from 'react-redux';
import { styled } from '@mui/material/styles';
import { editNote } from '../../store/actions/board';
import EditText from './EditText';
import EditTags from './EditTags';
import ModalHeader from './ModalHeader';
import ModalWrap from '../../components/UI/ModalWrap';

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
    <ModalWrap onClick={closeModal}>
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
          editText={(text) => setNewText(text)}
        />
        <EditTags newTags={newTags} updateTags={(tags) => setNewTags(tags)} />
        <ModalFooter>
          <Button type="submit" variant="contained" fullWidth>
            Ok
          </Button>
          <Button onClick={closeModal} fullWidth variant="contained">
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </ModalWrap>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    onEditNote: (note) => dispatch(editNote(note)),
  };
}

export default connect(null, mapDispatchToProps)(ModalEditNote);
