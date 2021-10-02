import React from 'react';
import { styled } from '@material-ui/core';

const HeaderWrap = styled('header')({
  padding: '0.5rem',
  color: '#5a5a65',
  background: '#ffffff',
  borderRadius: '0.75rem',
});

const Header = () => (
  <HeaderWrap>
    <h1>Notes with tags</h1>
  </HeaderWrap>
);

export default Header;
