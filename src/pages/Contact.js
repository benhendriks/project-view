import React from 'react';
import { motion } from 'framer-motion';
import { lineAnim, pageAnimation, titleAnim } from '../animation';
import styled from 'styled-components';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import ScrollTop from '../components/ScrollTop';

const ContactStyle = styled(motion.div)`
  min-height: 90vh;
  color:#eaeaea;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
  .line {
    height: 0.5rem;
    background: linear-gradient(to right, rgb(221, 189, 84), rgb(234, 234, 234));
    margin-bottom: .5rem;
  }
  a {
    font-size: 4rem;
    color: #eaeaea;
    &:hover {
      color: #ddbd54;
    }
  }
  @media (max-width: 1300px) {
    a {
      font-size: 3rem; 
    }
  }
`;

const Title = styled.div`
  color: #eaeaea;
  @media (max-width: 1500px) {
    margin-top: 1rem;
  }
`;

const Hide = styled.div`
  overflow: hidden; 
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2.3rem;
  }
  @media (max-width: 1300px) {
      h2 {
        font-size: 3rem; 
      }
    }
    @media (max-width: 300px) {
      h2 {
        font-size: 2.2rem;
      }
    }
`;

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit" 
      variants={pageAnimation} 
      initial="hidden" 
      animate="show"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>
            Get in touch
          </motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <a href="https://linkedin.com/in/benjaminsteidl-ux" target="blank">
              <FaLinkedin />
            </a>
              <h2>Send me a message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <a href="mailto:info@benjaminsteidl.com" target="blank">
              <FaEnvelope />
            </a>
              <h2>Send me an email</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <a href="https://github.com/benhendriks" target="blank">
              <FaGithub />
            </a>
              <h2>Take a look at my code</h2>
          </Social>
        </Hide>
      </div>
      <ScrollTop />
    </ContactStyle>
  );
};

export default ContactUs;