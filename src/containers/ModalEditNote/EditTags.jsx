import { Box, styled, Button } from '@material-ui/core';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextInput from '../../components/UI/TextInput';
import TagList from '../../components/TagList';
import FieldsetWrap from '../../components/UI/FieldsetWrap';

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

export default function EditTags({ newTags, updateTags }) {
  const [tag, setTag] = useState('');
  const [errorText, setErrorText] = useState('');

  const handleInputChange = (e) => {
    setTag(e.target.value);
    setErrorText('');
  };

  const handleAddTagClick = () => {
    const newTag = tag.toLowerCase().trim();

    if (/\p{P}+/u.test(newTag) || /\s+/.test(newTag)) {
      setErrorText('please enter only letters and numbers');
      return;
    }

    if (newTags.includes(newTag)) {
      setErrorText('this tag is already in the list');
      return;
    }

    if (newTag.length > 0) {
      updateTags([...newTags, `#${newTag}`]);
      setTag('');
    } else {
      setErrorText('min. length is one character');
    }
  };

  const deleteTag = (currentTag) =>
    updateTags(newTags.filter((item) => item !== currentTag));

  return (
    <FieldsetWrap>
      <Typography variant="subtitle1" fontWeight="600" gutterBottom>
        Tags:
      </Typography>
      <TagList tags={newTags} deleteTag={deleteTag} />
      <TagInputWrapper>
        <TextInput
          value={tag}
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
    </FieldsetWrap>
  );
}
