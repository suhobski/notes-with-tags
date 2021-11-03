import React from 'react';
import { PropTypes } from 'prop-types';
import Typography from '@mui/material/Typography';

export default function NoteText({ children, textWithTags }) {
  return (
    <Typography
      variant="body1"
      py="8px"
      fontSize="1.25rem"
      dangerouslySetInnerHTML={textWithTags ? { __html: textWithTags } : null}
    >
      {children}
    </Typography>
  );
}

NoteText.defaultProps = {
  children: null,
  textWithTags: null,
};

NoteText.propTypes = {
  children: PropTypes.node,
  textWithTags: PropTypes.string,
};
