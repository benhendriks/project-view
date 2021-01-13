import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1700px) {
      font-size: 75%;
    }
  }

  body {
    background: #050404;
    font-family: 'Raleway', sans-serif;
    overflow-x: hidden;
  }
  button {
    font-weight: lighter;
    font-size: 1.5rem;
    font-family: 'Raleway', sans-serif;
    letter-spacing: 2px;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 1.5px solid #eaeaea; 
    border-radius: 4px;
    background: transparent;
    color: white;
    transition: all 0.8s ease;
    &:hover{
      background-color: #ddbd54;
      color: #050404;
      border: 1.5px solid #ddbd54;
    }
  }
  h2 {
    font-weight: lighter;
    font-size: 5.5rem; 
    color: #eaeaea;
  }
  h3 {
    color: #eaeaea;
  }
  h4 {
    font-weight: bold;
    font-size: 2.5rem;
  }
  a {
    font-size: 2.5rem;
  }
  span {
    font-weight: bold;
    color: #ddbd54;
  }
  p {
    padding: 3rem 0rem;
    color: #eaeaea;
    font-size: 1.8rem;
    line-height: 150%;
    letter-spacing: 1.2px;
  }
`;

export default GlobalStyle;