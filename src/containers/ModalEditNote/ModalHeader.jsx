import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material';

const Header = styled('header')({
  display: 'flex',
  justifyContent: 'space-between',
});

const NoteDate = styled('p')({
  fontSize: '0.75rem',
  borderRadius: 4,
  margin: '0.5rem 0',
});

export default function ModalHeader({ noteDate }) {
  const date = useMemo(
    () =>
      `${noteDate
        .toLocaleTimeString()
        .substring(0, 5)} ${noteDate.toLocaleDateString()}`,
    [noteDate]
  );

  return (
    <Header>
      <h2>Edit note</h2>
      <NoteDate>{date}</NoteDate>
    </Header>
  );
}

ModalHeader.propTypes = {
  noteDate: PropTypes.instanceOf(Date).isRequired,
};
