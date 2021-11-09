import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uid from 'uid2';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { addNote } from '../../store/actions/board';
import TextInput from '../../components/UI/TextInput';
import TagList from '../../components/TagList';
import FieldsetWrap from '../../components/UI/FieldsetWrap';
import CreateNoteFormWrap from './CreateNoteFormWrap';
import FormButton from '../../components/UI/FormButton';

const CreateNoteForm = ({ closeModal, onAddNote, formDisplay }) => {
  const [note, setNote] = useState('');
  const [tags, setTags] = useState(null);

  const handleChange = (e) => {
    const noteText = e.target.value;
    const noteTags = noteText.match(/#[a-zа-я0-9]+/giu);
    setTags(Array.from(new Set(noteTags)));
    setNote(noteText);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (note.length > 0) {
      onAddNote({
        noteId: uid(10),
        noteText: note,
        noteTags: tags,
        noteDate: new Date(),
      });
      setNote('');
      setTags(null);
      if (closeModal) closeModal();
    }
  };

  const handleKeyPress = (e) => {
    if (e.ctrlKey && e.code === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <CreateNoteFormWrap
      onClick={(e) => e.stopPropagation()}
      style={{ display: formDisplay }}
      onKeyPress={handleKeyPress}
    >
      <h2 style={{ marginBottom: '0.5rem' }}>Create note</h2>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextInput
          id="note"
          name="note"
          label="write a note..."
          multiline
          autoFocus
          minRows={3}
          maxRows={10}
          value={note}
          onChange={handleChange}
        />
        <FieldsetWrap pb="0" minHeight="78px">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              pb: '8px',
            }}
          >
            <h4>Tags:</h4>
            <Typography variant="caption">#tagexample</Typography>
          </Box>
          <TagList tags={tags} />
        </FieldsetWrap>
        <FormButton type="submit" variant="contained" fullWidth>
          Ok
        </FormButton>
      </Box>
    </CreateNoteFormWrap>
  );
};

CreateNoteForm.defaultProps = {
  closeModal: null,
  formDisplay: 'block',
};

CreateNoteForm.propTypes = {
  closeModal: PropTypes.func,
  onAddNote: PropTypes.func.isRequired,
  formDisplay: PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return {
    onAddNote: (note) => dispatch(addNote(note)),
  };
}
export default connect(null, mapDispatchToProps)(CreateNoteForm);
