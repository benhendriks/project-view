import React from 'react';

import { FaEnvelope, FaLinkedinIn, FaGithub } from 'react-icons/fa';


function Sidebar() {

  return (
    <div className="socialbar">
      <div className="social-links">
        <a href="mailto:info@benjaminsteidl.com" >
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/feed/" target="blank">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/benhendriks" target="blank" >
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
