import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageAnimation, fade, photoAnim, lineAnim } from '../animation';
import { useScroll } from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';
import { FaGithub } from 'react-icons/fa';


const WorkStyle = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`;

const Project = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: linear-gradient(to right, rgb(221, 189, 84), rgb(234, 234, 234));
    margin-bottom: 3rem;
  }
  a {
    font-size: 4rem;
    color: #eaeaea;
    &:hover {
      color: #ddbd54;
    }
  }
  img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;


const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();
  const [element5, controls5] = useScroll();
  return (
    <WorkStyle 
      exit="exit" 
      variants={pageAnimation} 
      initial="hidden" 
      animate="show"
    >
      <Project>
        <motion.h2 variants={fade}>
          Date Fox 
            <span>
              <a href="https://github.com/zcallanan/rails-date-fox" target="blank">
                <FaGithub />
              </a>
            </span>
        </motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
          <Hide>
          <a href="https://date-fox.herokuapp.com/" target="blank">
            <motion.img 
              variants={photoAnim} 
              src="https://res.cloudinary.com/daf8fgekl/image/upload/v1607675808/benjaminsteidl.com/Date_Fox/date_fox_home_nvhskb.png" 
              alt="Benjamin Steidl"
            />
          </a>
          </Hide>
      </Project>
      <Project ref={element} variants={fade} animate={controls} initial='hidden'>
        <motion.h2 variants={fade}>
          Garden Fox 
            <span>
              <a href="https://github.com/zcallanan/rails-garden-fox" target="blank">
                <FaGithub />
              </a>
            </span>
        </motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
          <a href="https://garden-fox.herokuapp.com/" target="blank">
            <motion.img 
              variants={photoAnim} 
              src="https://res.cloudinary.com/daf8fgekl/image/upload/v1607676674/benjaminsteidl.com/Garden_Fox/garden_fox_search_iwomsm.png" 
              alt="Benjamin Steidl"
            />
          </a>
      </Project>
      <Project ref={element2} variants={fade} animate={controls2} initial='hidden'>
        <motion.h2 variants={fade}>
          Slick Slices 
            <span>
              <a href="https://github.com/benhendriks/20_master-gatsby-master" target="blank">
                <FaGithub />
              </a>
            </span>
        </motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <a href="https://happy-torvalds-54c393.netlify.app/" target="blank">
          <motion.img 
            variants={photoAnim} 
            src="https://res.cloudinary.com/daf8fgekl/image/upload/v1607676261/benjaminsteidl.com/Slick_Slices/slick_slices_hot_now_ycsevo.png" alt="Benjamin Steidl"
          />
        </a>
      </Project>
      <Project ref={element3} variants={fade} animate={controls3} initial='hidden'>
        <motion.h2 variants={fade}>
          Ignite game app  
            <span>
              <a href="https://github.com/benhendriks/25_ignite" target="blank">
                <FaGithub />
              </a>
            </span>
          </motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <a href="http://loarpo.com/" target="blank">
          <motion.img 
            variants={photoAnim} 
            src="https://res.cloudinary.com/daf8fgekl/image/upload/v1607707497/benjaminsteidl.com/Games/games_view_y9c1kt.png" alt="Benjamin Steidl"
          />
        </a>
      </Project>
      <Project ref={element4} variants={fade} animate={controls4} initial='hidden'>
        <motion.h2 variants={fade}>
          Music Player  
            <span>
              <a href="https://github.com/benhendriks/22_music_player" target="blank">
                <FaGithub />
              </a>
            </span>
          </motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <a href="https://github.com/benhendriks/22_music_player" target="blank">
          <motion.img 
            variants={photoAnim} 
            src="https://res.cloudinary.com/daf8fgekl/image/upload/v1607682493/benjaminsteidl.com/Music_Player/player_qeayfm.png" alt="Benjamin Steidl"
          />
        </a>
      </Project>
      <Project ref={element5} variants={fade} animate={controls5} initial='hidden'>
        <motion.h2 variants={fade}>
          Recipe App  
            <span>
              <a href="https://github.com/benhendriks/recipe" target="blank">
                <FaGithub />
              </a>
            </span>
          </motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <a href="https://github.com/benhendriks/recipe" target="blank">
          <motion.img 
            variants={photoAnim} 
            src="https://res.cloudinary.com/daf8fgekl/image/upload/v1607682472/benjaminsteidl.com/Recipe_api/recipe_search_mhwzbr.png" alt="Benjamin Steidl"
          />
        </a>
      </Project>
      <ScrollTop />
    </WorkStyle>
  );
};

export default OurWork;