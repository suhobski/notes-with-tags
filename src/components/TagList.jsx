import React from 'react';
import { PropTypes } from 'prop-types';
import { styled } from '@mui/material';
import ButtonDeleteTag from './ButtonDeleteTag';

const List = styled('ul')({
  width: '100%',
  minHeight: 32,
  margin: '0',
  padding: 0,
  border: 'none',
  color: '#ffffff',
});

const Tag = styled('li')({
  position: 'relative',
  display: 'inline-block',
  margin: '0 0.5rem 0.5rem 0',
  padding: '0 0.25rem',
  listStyleType: 'none',
  borderRadius: 4,
  background: '#5a5a65',
  color: '#ffffff',
  cursor: 'pointer',
});

export default function TagList({ tags, deleteTag = null }) {
  return (
    <List>
      {tags?.length > 0 &&
        tags.map((tag) => (
          <Tag key={tag} onClick={() => deleteTag(tag)}>
            {tag}
            {deleteTag && <ButtonDeleteTag deleteTag={() => deleteTag(tag)} />}
          </Tag>
        ))}
    </List>
  );
}

TagList.defaultProps = {
  tags: [],
  deleteTag: null,
};

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  deleteTag: PropTypes.func,
};
