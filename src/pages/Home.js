import React from 'react';
import HomeSection from '../components/HomeSection';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';

const Home = () => {
  return (
    <motion.div 
      exit="exit" 
      variants={pageAnimation} 
      initial="hidden" 
      animate="show"
    >
      <HomeSection />
      <ScrollTop />
    </motion.div>
  );
};

export default Home;