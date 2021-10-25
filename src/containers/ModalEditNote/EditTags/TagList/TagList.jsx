import { styled } from '@material-ui/core';
import React from 'react';
import ButtonDeleteTag from '../../../../components/UI/ButtonDeleteTag/ButtonDeleteTag';

const List = styled('ul')({
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

const Tag = styled('li')({
  position: 'relative',
  display: 'inline-block',
  margin: '0 1rem 0.75rem 0',
  padding: '0 0.25rem',
  listStyleType: 'none',
  borderRadius: 4,
  background: '#5a5a65',
  color: '#ffffff',
});

export default function TagList({ newTags, deleteTag }) {
  return (
    <List>
      {newTags.length ? (
        newTags.map((tag) => (
          <Tag key={tag}>
            {tag}
            <ButtonDeleteTag deleteTag={() => deleteTag(tag)} />
          </Tag>
        ))
      ) : (
        <p>...</p>
      )}
    </List>
  );
}
