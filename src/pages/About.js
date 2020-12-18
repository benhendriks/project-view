import React from 'react';
import FaqSection from '../components/FaqSection';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';

const AboutUs = () => {
  return (
    <motion.div 
      exit="exit" 
      variants={pageAnimation} 
      initial="hidden" 
      animate="show"
    >
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;