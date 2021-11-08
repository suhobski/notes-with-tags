import { CardContent, styled } from '@mui/material';

const MainContent = styled(CardContent)({
  display: 'grid',
  gridTemplateColumns: 'minmax(300px, 33%) auto',
  alignItems: 'stretch',
  gap: 8,
  padding: '8px 0',
  '&.mobile': {
    gridTemplateColumns: 'auto',
  },
  '&.desktop': {
    gridTemplateColumns: 'minmax(300px, 33%) auto',
  },
});

export default MainContent;
