import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from './components/Header';
import Board from './containers/Board';
import Footer from './components/Footer';
import CreateNoteForm from './containers/CreateNoteForm';
import MainContent from './components/MainContent';
import AppWrap from './components/AppWrap';

const App = () => {
  const matches = useMediaQuery('(max-width:599px)');

  return (
    <AppWrap maxWidth="md">
      <Header />
      <MainContent className={matches ? 'mobile' : 'desktop'}>
        <CreateNoteForm formDisplay={matches ? 'none' : 'block'} />
        <Board />
      </MainContent>
      <Footer />
    </AppWrap>
  );
};

export default App;
