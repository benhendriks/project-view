import React from 'react';
import styled from 'styled-components';
import { HomeStyle } from './styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';

const FaqStyle = styled(HomeStyle)`
  display: block;
  margin: 0rem  10rem;
    span {
      display: block;
    }
    h2 {
      padding-bottom: 1rem;
      font-weight: lighter; 
    }
  .faq-line {
    background: #eaeaea;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding-top: 2rem;
    cursor: pointer;
  }
  .anwser {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
  @media (max-width: 1300px) {
      margin: .5rem;
    }
`;

const FaqSection = () => {
  return (
    <FaqStyle initial="hidden">
      <h2>Here is my <span>CV</span></h2>
      <AnimateSharedLayout>
        <Toggle title="About">
          <div className="answer">
            <p>
              Originally from Munich where I learned to code with Le Wagon Coding Bootcamp in 2020
            </p>
          </div>
        </Toggle>
        <Toggle title="Experience">
          <div className="answer">
            <p>
              Worked for FC Bayern eV as Membership Admin
            </p>
            <p>
              Worked for Hornbach in Sales and customer service
            </p>
            <p>
              Worked for BMW as logistic apprentice
            </p>
          </div>
        </Toggle>
        <Toggle title="Education">
          <div className="answer">
            <p>
              Le Wagon to Full Stack Developer
            </p>
            <p>
              Usability Academy to Usability & UX Expert
            </p>
            <p>
              IHK Oberbayern to Online Marketing Manager
            </p>
          </div>
      </Toggle>
      <Toggle title="Technical Skills">
        <div className="answer">
          <p>
            HTML & CSS, SASS, Styled-Components, Javascript ES6, Typescript, Ruby on Rails, React.js, Next.js, Gatsby, Postgre SQL
          </p>
        </div>
      </Toggle>
    </AnimateSharedLayout>
  </FaqStyle>
  );
};

export default FaqSection;