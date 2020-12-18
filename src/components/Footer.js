import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  height: 6vh;
  background: #ddbd54;
  color: #eaeaea;
  width: 100%;
  position: sticky;
  bottom: 0;
  text-align: center;
  z-index: 4;
  p {
    font-size: 1rem;
    padding: 0rem;
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <p>®Benjamin Steild</p>
      <p>info@benjaminsteidl.com</p>
    </FooterStyle>
  );
};

export default Footer;