import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import TextInput from '../../../components/UI/TextInput';
import FieldsetWrap from '../../../components/UI/FieldsetWrap';
import { validateTag } from '../../../utils';
import ModifyTagList from './ModifyTagList';
import ButtonAddTag from './ButtonAddTag';
import TagInputWrapper from './TagInputWrapper';

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
