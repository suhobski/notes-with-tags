import { Box, Typography } from '@material-ui/core';
import React, { useMemo } from 'react';
import TextInput from '../../components/UI/TextInput';

export default function EditText({ noteText, newText, setNewText }) {
  const textWithTags = useMemo(() => {
    return noteText.replace(
      /#[a-zA-Zа-яА-Я0-9]+/g,
      '<span style="display:inline-block;background-color:#5bd497;padding:0 4px;border-radius:4px">$&</span>'
    );
  }, [noteText]);

  return (
    <Box>
      <h4>Text:</h4>
      <Typography
        style={{ margin: '8px 0' }}
        gutterBottom
        dangerouslySetInnerHTML={{ __html: textWithTags }}
      />
      <TextInput
        id="editNote"
        name="editNote"
        multiline
        maxRows={4}
        label="Edit text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
    </Box>
  );
}
