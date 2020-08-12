import React from 'react';

import { Link } from 'react-router-dom';
import { FaEnvelope, FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';


function Sidebar() {

  return (
    <div className="socialbar">
      <div className="sociallinks">
        <Link className="icon" to="/contact">
          <FaEnvelope />
        </Link>
        <Link className="icon" to="/Work">
          <FaLinkedinIn />
        </Link>
        <Link className="icon" to="/Work">
          <FaGithub />
        </Link>
        <Link className="icon" to="/Work">
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
