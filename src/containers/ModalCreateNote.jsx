import React from 'react';
import { Card, styled } from '@material-ui/core';
import CreateNoteForm from './CreateNoteForm';

const Modal = styled(Card)({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  background: 'rgba(0, 0, 0, 0.5)',
  display: 'grid',
  gridTemplateColumns: 'minmax(280px, 400px)',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 1rem',
});

const ModalCreateNote = ({ closeModal }) => (
  <Modal onClick={closeModal}>
    <CreateNoteForm closeModal={closeModal} />
  </Modal>
);

export default ModalCreateNote;
