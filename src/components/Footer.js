import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  height: 6.5vh;
  background: linear-gradient(to right, rgb(10, 8, 5), rgb(234, 234, 234));
  color: #eaeaea;
  width: 100%;
  bottom: 0;
  text-align: center;
  z-index: 4;
  p {
    font-size: 1rem;
    padding: 0.3rem 0rem 0rem 0rem;
  }
  @media (max-width: 1300px) {
    p {
    padding: 0rem 0rem 0rem 0.5rem;
  }
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <p>®Benjamin Steidl</p>
      <p>info@benjaminsteidl.com</p>
    </FooterStyle>
  );
};

export default Footer;