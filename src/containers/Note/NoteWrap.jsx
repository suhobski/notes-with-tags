import { Card, styled } from '@mui/material';

const NoteWrap = styled(Card)({
  position: 'relative',
  marginBottom: '0.5rem',
  padding: '0.5rem 0.5rem 0',
  color: '#5A5A65',
  '&:last-child': {
    marginBottom: 0,
  },
});

export default NoteWrap;
