import React, { useState } from 'react';
import { Button, Card, TextField, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { editNote } from '../../store/actions/board';
import ButtonDeleteTag from '../../components/ButtonDeleteTag/ButtonDeleteTag';

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

const CssTextField = styled(TextField)({
  '&': {
    margin: '8px 0',
  },
  '& label.Mui-focused': {
    color: '#5A5A65',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#5a5a65',
    },
  },
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
  const [editNoteTags, setEditNoteTags] = useState(noteTags);
  const [addTag, setAddTag] = useState('');
  const date = `${noteDate
    .toLocaleTimeString()
    .substring(0, 5)} ${noteDate.toLocaleDateString()}`;

  const textWithTags = noteText.replace(
    /#[a-zа-я0-9]+/g,
    '<span style="display:inline-block;background-color:#5bd497;padding:0 4px;border-radius:4px">$&</span>'
  );

  const handleChangeTag = (e) => {
    setAddTag(e.target.value);
  };

  const onAddTagClick = () => {
    if (addTag.length > 0) {
      if (addTag[0] === '#') {
        setEditNoteTags([...editNoteTags, addTag]);
        setAddTag('');
      } else {
        setEditNoteTags([...editNoteTags, `#${addTag}`]);
        setAddTag('');
      }
    }
  };

  const deleteTag = (currentTag) => {
    const newTags = editNoteTags.filter((tag) => tag !== currentTag);
    setEditNoteTags(newTags);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get('editNote').length > 0) {
      // eslint-disable-next-line no-console
      onEditNote({
        noteId,
        noteText: data.get('editNote'),
        noteTags: editNoteTags,
        noteDate: new Date(),
      });
      closeModal();
    }
  };

  return (
    <ModalEditNoteWrap onSubmit={handleSubmit} component="form" noValidate>
      <NoteWrap>
        <NoteTitle>Edit note</NoteTitle>
        <NoteDate>{date}</NoteDate>
        <Box>
          <h4>Text:</h4>
          <Typography
            style={{ margin: '8px 0' }}
            gutterBottom
            dangerouslySetInnerHTML={{ __html: textWithTags }}
          />
          <CssTextField
            id="editNote"
            name="editNote"
            variant="outlined"
            label="Edit text"
            multiline
            maxRows={4}
            fullWidth
            defaultValue={noteText}
          />
        </Box>
        <Box>
          <h4>Tags:</h4>
          <NoteList>
            {editNoteTags.length > 0 ? (
              editNoteTags.map((tag) => (
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
            <CssTextField
              value={addTag}
              onChange={handleChangeTag}
              name="addTag"
              variant="outlined"
              label="Write a tag..."
            />
            <ButtonAddTag
              onClick={onAddTagClick}
              variant="contained"
              key="AddTag"
            >
              Add tag
            </ButtonAddTag>
          </TagInputWrapper>
        </Box>
        <ModalFooter>
          <Button type="submit" variant="contained" fullWidth>
            Ok
          </Button>
          <Button onClick={() => closeModal()} fullWidth variant="contained">
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
