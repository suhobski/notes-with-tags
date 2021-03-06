import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editNote } from '../../store/actions/board';
import FieldEditText from './FieldEditText';
import FieldEditTags from './FieldEditTags';
import ModalHeader from './ModalHeader';
import ModalWrap from '../../components/UI/ModalWrap';
import FormEditNoteWrap from './FormEditNoteWrap';
import Footer from './Footer';
import FormButton from '../../components/UI/FormButton';

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

  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.code === 'Enter') {
      handleSubmit(e);
    }
    if (closeModal && e.code === 'Escape') {
      closeModal();
    }
  };

  return (
    <ModalWrap onClick={closeModal} onKeyDown={handleKeyDown} tabIndex="0">
      <FormEditNoteWrap
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        component="form"
      >
        <ModalHeader noteDate={noteDate} />
        <FieldEditText
          noteText={noteText}
          newText={newText}
          editText={(text) => setNewText(text)}
        />
        <FieldEditTags
          newTags={newTags}
          updateTags={(tags) => setNewTags(tags)}
        />
        <Footer>
          <FormButton type="submit" variant="contained" fullWidth>
            Ok
          </FormButton>
          <FormButton onClick={closeModal} fullWidth variant="contained">
            Cancel
          </FormButton>
        </Footer>
      </FormEditNoteWrap>
    </ModalWrap>
  );
};

ModalEditNote.propTypes = {
  note: PropTypes.PropTypes.shape({
    noteId: PropTypes.string,
    noteText: PropTypes.string,
    noteTags: PropTypes.arrayOf(PropTypes.string),
    noteDate: PropTypes.instanceOf(Date),
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
  onEditNote: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    onEditNote: (note) => dispatch(editNote(note)),
  };
}

export default connect(null, mapDispatchToProps)(ModalEditNote);
