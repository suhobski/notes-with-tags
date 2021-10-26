import { Box, styled, Button } from '@material-ui/core';
import React from 'react';
import TextInput from '../../../components/UI/TextInput/TextInput';
import TagList from './TagList/TagList';

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
    <Box
      bgcolor="#F8F8F8"
      p={1}
      mb={2}
      borderRadius="4px"
      border="1px solid #cccccc"
    >
      <h4>Tags:</h4>
      <TagList newTags={newTags} deleteTag={deleteTag} />
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
