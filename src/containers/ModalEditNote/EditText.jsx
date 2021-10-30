import React, { useMemo } from 'react';
import Typography from '@mui/material/Typography';
import FieldsetWrap from '../../components/UI/FieldsetWrap';
import NoteText from '../../components/UI/NoteText';
import TextInput from '../../components/UI/TextInput';

export default function EditText({ noteText, newText, setNewText }) {
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
      <NoteText dangerouslySetInnerHTML={{ __html: textWithTags }} />
      <TextInput
        id="editNote"
        name="editNote"
        multiline
        maxRows={4}
        label="editNotext"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
    </FieldsetWrap>
  );
}