import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { deleteNote } from '../../store/actions/board';
import ModalEditNote from '../ModalEditNote';
import NoteWrap from './NoteWrap';
import NoteText from '../../components/UI/NoteText';
import TagList from '../../components/TagList';
import ButtonDeleteNote from './ButtonDeleteNote';
import ButtonEditNote from './ButtonEditNote';

const Note = ({ note, onDeleteNote }) => {
  const [isOpenEditNoteModal, setIsOpenEditNoteModal] = useState(false);
  const { noteDate, noteId, noteTags, noteText } = note;
  const date = `${noteDate
    .toLocaleTimeString()
    .substring(0, 5)} ${noteDate.toLocaleDateString()}`;

  return (
    <NoteWrap>
      <ButtonEditNote openEditNoteModal={() => setIsOpenEditNoteModal(true)} />
      <ButtonDeleteNote deleteNote={() => onDeleteNote(noteId)} />
      <Typography variant="body2">{date}</Typography>
      <NoteText>{noteText}</NoteText>
      {noteTags.length > 0 && <TagList tags={noteTags} />}
      {isOpenEditNoteModal && (
        <ModalEditNote
          note={note}
          closeModal={() => setIsOpenEditNoteModal(false)}
        />
      )}
    </NoteWrap>
  );
};

Note.propTypes = {
  note: PropTypes.PropTypes.shape({
    noteId: PropTypes.string,
    noteText: PropTypes.string,
    noteTags: PropTypes.arrayOf(PropTypes.string),
    noteDate: PropTypes.instanceOf(Date),
  }).isRequired,
  onDeleteNote: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    onDeleteNote: (id) => dispatch(deleteNote(id)),
  };
}

export default connect(null, mapDispatchToProps)(Note);
