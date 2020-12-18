import { motion } from "framer-motion";
import styled from "styled-components";

export const HomeStyle = styled(motion.div)`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color:#eaeaea;
  @media (max-width: 1300px) {
      display: block;
      text-align: center;
    }
`;

export const Description = styled.div`
  flex: 1;
  padding-left: 10rem;
  z-index: 2;
    h2 {
      font-weight: lighter;
    }
    @media (max-width: 1300px) {
      padding: 0;
      button {
        margin: 2rem 0rem 5rem 0rem; 
      }
    }
    @media (max-width: 400px) {
      h2 {
        font-size: 3.5rem;
      }
      span {
        font-size: 3.5rem;
      }
    }
    @media (max-width: 300px) {
      h2 {
        font-size: 2.5rem;
      }
      span {
        font-size: 2.5rem;
      }
    }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    height: 80vh;
    object-fit: cover;   
  }
`;