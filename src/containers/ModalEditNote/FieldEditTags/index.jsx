import React, { useState } from 'react';
import { Box, styled, Button } from '@mui/material';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import TextInput from '../../../components/UI/TextInput';
import FieldsetWrap from '../../../components/UI/FieldsetWrap';
import { validateTag } from '../../../utils';
import ModifyTagList from './ModifyTagList';

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

const FieldEditTags = ({ newTags, updateTags }) => {
  const [tag, setTag] = useState('');
  const [errorText, setErrorText] = useState('');

  const handleInputChange = (e) => {
    setTag(e.target.value);
    setErrorText('');
  };

  const handleAddTagClick = () => {
    try {
      const newTag = validateTag(tag, newTags);
      updateTags([...newTags, `#${newTag}`]);
      setTag('');
    } catch (e) {
      setErrorText(e.message);
    }
  };

  const handleKeyDown = (e) => {
    if (e.code === 'Enter') {
      e.preventDefault();
      handleAddTagClick();
    }
  };

  const deleteTag = (currentTag) => {
    updateTags(newTags.filter((item) => item !== currentTag));
  };

  return (
    <FieldsetWrap>
      <Typography variant="subtitle1" fontWeight="600" gutterBottom>
        Tags:
      </Typography>
      <ModifyTagList tags={newTags} deleteTag={deleteTag} />
      <TagInputWrapper>
        <TextInput
          value={tag}
          onChange={handleInputChange}
          name="addTag"
          label="Write a tag..."
          onKeyDown={handleKeyDown}
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
};

FieldEditTags.propTypes = {
  newTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateTags: PropTypes.func.isRequired,
};

export default FieldEditTags;
