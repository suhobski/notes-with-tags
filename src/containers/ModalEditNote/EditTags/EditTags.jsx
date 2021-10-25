import { Box, styled, Button } from '@material-ui/core';
import React from 'react';
import TextInput from '../../../components/UI/TextInput/TextInput';
import ButtonDeleteTag from '../../../components/UI/ButtonDeleteTag/ButtonDeleteTag';

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

export default function EditTags({ newTags, setNewTags, addTag, setAddTag }) {
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

  return (
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
          onChange={(e) => setAddTag(e.target.value)}
          name="addTag"
          label="Write a tag..."
        />
        <ButtonAddTag onClick={onAddTagClick} variant="contained">
          Add tag
        </ButtonAddTag>
      </TagInputWrapper>
    </Box>
  );
}
