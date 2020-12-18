import React from 'react';
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './Wave';
import styled from 'styled-components';
import { HomeStyle, Description, Image } from './styles';
import { Link } from 'react-router-dom';

const Hide = styled.div`
  overflow: hidden;
`;

const AboutSection = () => {
  return(
    <HomeStyle>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Hi, I'm Ben 
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              a <span>Webdeveloper</span>,
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              based in Bern 
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact me for any Web Project idears that you have. 
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fade}>Contact</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img 
          variants={photoAnim} 
          src="https://res.cloudinary.com/daf8fgekl/image/upload/v1604137309/benjaminsteidl.com/Portret/profile_izavlk.png" 
          alt="Benjamin Steidl"/>
      </Image>
      <Wave />
    </HomeStyle>
  );
};

export default AboutSection;