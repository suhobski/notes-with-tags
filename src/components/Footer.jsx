import React from 'react';
import { styled } from '@mui/material';

const FooterWrap = styled('footer')({
  fontSize: '0.75rem',
  textAlign: 'center',
  color: '#ffffff',
  background: 'transparent',
});

const Footer = () => (
  <FooterWrap>
    <p>2021, made by Alex Sukhobski</p>
  </FooterWrap>
);

export default Footer;
