import { Box, styled, Button } from '@material-ui/core';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextInput from '../../../components/UI/TextInput/TextInput';
import TagList from '../../../components/TagList/TagList';

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
  const [errorText, setErrorText] = useState('');

  const handleInputChange = (e) => {
    setAddTag(e.target.value);
    setErrorText('');
  };

  const handleAddTagClick = () => {
    const newTag = addTag.toLowerCase().trim();

    if (/\p{P}+/u.test(newTag) || /\s+/.test(newTag)) {
      setErrorText('please enter only letters and numbers');
      return;
    }

    if (newTags.includes(newTag) || newTags.includes(`#${newTag}`)) {
      setErrorText('this tag is already in the list');
      return;
    }

    if (newTag.length > 0) {
      if (newTag[0] === '#') {
        setNewTags([...newTags, newTag]);
        setAddTag('');
      } else {
        setNewTags([...newTags, `#${newTag}`]);
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
      <Typography variant="subtitle1" fontWeight="600" gutterBottom>
        Tags:
      </Typography>
      <TagList tags={newTags} deleteTag={deleteTag} />
      <TagInputWrapper>
        <TextInput
          value={addTag}
          onChange={handleInputChange}
          name="addTag"
          label="Write a tag..."
        />
        <ButtonAddTag onClick={handleAddTagClick} variant="contained">
          Add tag
        </ButtonAddTag>
        {errorText && (
          <Typography variant="body1" color="error">
            {errorText}
          </Typography>
        )}
      </TagInputWrapper>
    </Box>
  );
}
