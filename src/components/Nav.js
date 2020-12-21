import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Logo from '../img/logo.png';

const NavStyle = styled.div`
  min-height: 10vh;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 10rem;
  background-color: #050404;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: #eaeaea;
    text-decoration: none;
    &:hover {
      color: #ddbd54;
    }
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    width: 2.5rem;
    height: 2rem;
  }
  li {
    padding-left: 10rem;
    position: relative; 
  }
  @media (max-width: 1300px) {
      flex-direction: column;
      padding: 3rem 1rem;
      #logo {
        display: inline-block;
        margin: 1rem;
      }
      ul {
        padding: 2rem;
        justify-content: space-around;
        width: 100%;
        li {
          padding: 0;
        }
      }
    }
    @media (max-width: 300px) {
      a {
        font-size: 1.5rem;
      }
    }
`;
const Line = styled(motion.div)`
  height: 0.3rem;
  background: linear-gradient();
  width: 0%;
  bottom: -80%;
  left: 60%;
`;

const Nav = () => {
  const {pathname} = useLocation();
  return (
    <NavStyle>
      <div className="logo">
        <Link id="logo" to="/">
          <img src={Logo} alt="Benjamin Steidl"/>
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/about">About</Link>
          <Line 
            transition={{ duration: 0.75 }} 
            initial={{ width: '0%' }} 
            animate={{ width: pathname === '/' ? '100%' : '0%' }} 
          />  
        </li>
        <li>
          <Link to="/work">Work</Link>
          <Line 
            transition={{ duration: 0.75 }} 
            initial={{ width: '0%' }} 
            animate={{ width: pathname === '/work' ? '100%' : '0%' }} 
          />
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          <Line 
            transition={{ duration: 0.75 }} 
            initial={{ width: '0%' }} 
            animate={{ width: pathname === '/contact' ? '100%' : '0%' }} 
          />
        </li>
      </ul>
    </NavStyle>
  );
};

export default Nav;