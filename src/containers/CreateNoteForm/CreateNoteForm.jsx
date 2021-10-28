import React, { useState } from 'react';
import { Button, Card } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { connect } from 'react-redux';
import uid from 'uid2';
import { addNote } from '../../store/actions/board';
import TextInput from '../../components/UI/TextInput/TextInput';
import TagList from '../../components/TagList/TagList';

const CreateNote = styled(Card)({
  padding: '1rem 0.5rem',
  color: '#5a5a65',
  background: '#ffffff',
  borderRadius: '0.75rem',
});

const TextInputWrapper = styled(Card)({
  marginBottom: '0.5rem',
  padding: '0.5rem',
  background: '#f8f8f8',
  color: '#5a5a65',
});

const CreateNoteForm = ({ closeModal, onAddNote }) => {
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
    <CreateNote onClick={(e) => e.stopPropagation()}>
      <h2 style={{ marginBottom: '0.5rem' }}>Create note</h2>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <h4>Text:</h4>
        <TextInputWrapper>
          <TextInput
            id="note"
            name="note"
            label="write a note..."
            multiline
            autoFocus
            maxRows={4}
            value={note}
            onChange={handleChange}
          />
        </TextInputWrapper>
        <h4>Tags:</h4>
        <TagList tags={tags} />
        <Button type="submit" variant="contained" fullWidth>
          Ok
        </Button>
      </Box>
    </CreateNote>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    onAddNote: (note) => dispatch(addNote(note)),
  };
}
export default connect(null, mapDispatchToProps)(CreateNoteForm);
