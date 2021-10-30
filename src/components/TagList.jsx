import { styled } from '@material-ui/core';
import React from 'react';
import ButtonDeleteTag from './UI/ButtonDeleteTag';

const List = styled('ul')({
  width: '100%',
  minHeight: 32,
  margin: '0',
  padding: 0,
  border: 'none',
  borderRadius: 4,
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
