import React from 'react';
import { PropTypes } from 'prop-types';
import { Box } from '@mui/material';

export default function FieldsetWrap({ children, pb, minHeight }) {
  return (
    <Box
      bgcolor="#f8f8f8"
      p={1}
      mb={2}
      borderRadius="4px"
      border="1px solid #cccccc"
      pb={pb}
      minHeight={minHeight}
    >
      {children}
    </Box>
  );
}

FieldsetWrap.defaultProps = {
  children: null,
  pb: 1,
  minHeight: 'unset',
};

FieldsetWrap.propTypes = {
  children: PropTypes.node,
  pb: PropTypes.number,
  minHeight: PropTypes.number,
};
