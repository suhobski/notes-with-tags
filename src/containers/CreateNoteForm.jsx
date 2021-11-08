import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Typography } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { connect } from 'react-redux';
import uid from 'uid2';
import { addNote } from '../store/actions/board';
import TextInput from '../components/UI/TextInput';
import TagList from '../components/TagList';
import FieldsetWrap from '../components/UI/FieldsetWrap';

const CreateNote = styled(Card)({
  padding: '1rem 0.5rem',
  color: '#5a5a65',
  background: '#ffffff',
  borderRadius: '0.75rem',
  zIndex: 0,
});

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
    const data = new FormData(event.currentTarget);
    if (data.get('note').length > 0) {
      // eslint-disable-next-line no-console
      onAddNote({
        noteId: uid(10),
        noteText: data.get('note'),
        noteTags: tags,
        noteDate: new Date(),
      });
      setNote('');
      setTags(null);
      if (closeModal) closeModal();
    }
  };

  return (
    <CreateNote
      onClick={(e) => e.stopPropagation()}
      style={{ display: formDisplay }}
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
            <Typography variant="body2">#tagexample</Typography>
          </Box>
          <TagList tags={tags} />
        </FieldsetWrap>
        <Button type="submit" variant="contained" fullWidth>
          Ok
        </Button>
      </Box>
    </CreateNote>
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
