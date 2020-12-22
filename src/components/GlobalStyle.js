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
    font-weight: bold;
    font-size: 1.1rem;
    font-family: 'Raleway', sans-serif;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #eaeaea; 
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover{
      background-color: #ddbd54;
      color: #050404;
      border: 3px solid #ddbd54;
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
    font-size: 2rem;
  }
  a {
    font-size: 2.2rem;
  }
  span {
    font-weight: bold;
    color: #ddbd54;
  }
  p {
    padding: 3rem 0rem;
    color: #eaeaea;
    font-size: 1.4rem;
    line-height: 150%;
  }
`;

export default GlobalStyle;