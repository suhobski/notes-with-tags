import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import FieldsetWrap from '../../components/UI/FieldsetWrap';
import NoteText from '../../components/UI/NoteText';
import TextInput from '../../components/UI/TextInput';

export default function FieldEditText({ noteText, newText, editText }) {
  const textWithTags = useMemo(() =>
    noteText.replace(
      /#[a-zA-Zа-яА-Я0-9]+/g,
      '<span style="display:inline-block;background-color:#5bd497;padding:0 4px;border-radius:4px">$&</span>',
      [noteText]
    )
  );

  return (
    <FieldsetWrap>
      <Typography variant="subtitle1" fontWeight="600" gutterBottom>
        Text:
      </Typography>
      <NoteText textWithTags={textWithTags} />
      <TextInput
        id="editNote"
        name="editNote"
        autoFocus
        multiline
        maxRows={4}
        label="editNotext"
        value={newText}
        onChange={(e) => editText(e.target.value)}
      />
    </FieldsetWrap>
  );
}

FieldEditText.propTypes = {
  noteText: PropTypes.string.isRequired,
  newText: PropTypes.string.isRequired,
  editText: PropTypes.func.isRequired,
};
