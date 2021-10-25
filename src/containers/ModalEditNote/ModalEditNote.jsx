import React, { useMemo, useState } from 'react';
import { Button, Card } from '@material-ui/core';
import { connect } from 'react-redux';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { editNote } from '../../store/actions/board';
import ButtonDeleteTag from '../../components/ButtonDeleteTag/ButtonDeleteTag';
import EditText from './EditText';
import TextInput from '../../components/UI/TextInput';

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

const NoteList = styled('ul')({
  display: 'inline-block',
  width: '100%',
  margin: 0,
  padding: '0.75rem 0.5rem 0',
  minHeight: 48,
  border: 'none',
  borderRadius: 4,
  background: '#f8f8f8',
  color: '#ffffff',
});

const NoteTag = styled('li')({
  position: 'relative',
  display: 'inline-block',
  margin: '0 1rem 0.75rem 0',
  padding: '0 0.25rem',
  listStyleType: 'none',
  borderRadius: 4,
  background: '#5a5a65',
  color: '#ffffff',
});

const ButtonAddTag = styled(Button)({
  display: 'inline-block',
  height: 56,
  margin: '0.5rem',
  marginRight: 0,
  padding: '0 0.25rem',
  listStyleType: 'none',
  borderRadius: 4,
  background: '#5bd497',
  border: 'none',
  color: '#ffffff',
  '&:hover': {
    background: '#57cf92',
  },
});

const TagInputWrapper = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'auto 100px',
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

  const handleChangeTag = (e) => {
    setAddTag(e.target.value);
  };

  const onAddTagClick = () => {
    // Если такой тег уже есть в списке, то не добавляем его
    if (newTags.includes(addTag) || newTags.includes(`#${addTag}`)) {
      return;
    }

    if (addTag.length > 0) {
      if (addTag[0] === '#') {
        setNewTags([...newTags, addTag]);
        setAddTag('');
      } else {
        setNewTags([...newTags, `#${addTag}`]);
        setAddTag('');
      }
    }
  };

  const deleteTag = (currentTag) =>
    setNewTags(newTags.filter((tag) => tag !== currentTag));

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
        <Box>
          <h4>Tags:</h4>
          <NoteList>
            {newTags.length ? (
              newTags.map((tag) => (
                <NoteTag key={tag}>
                  {tag}
                  <ButtonDeleteTag deleteTag={() => deleteTag(tag)} />
                </NoteTag>
              ))
            ) : (
              <p>...</p>
            )}
          </NoteList>
          <TagInputWrapper>
            <TextInput
              value={addTag}
              onChange={handleChangeTag}
              name="addTag"
              label="Write a tag..."
            />
            <ButtonAddTag onClick={onAddTagClick} variant="contained">
              Add tag
            </ButtonAddTag>
          </TagInputWrapper>
        </Box>
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
