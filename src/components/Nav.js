import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Nav()  {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff'}}>
        <div className="navbar">
          <div className="navbar-container nav-box">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="https://res.cloudinary.com/daf8fgekl/image/upload/v1598282248/logo_fyqsyy.svg" alt="Benjamin Steidl" />
          </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                  <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/work" className="nav-links" onClick={closeMobileMenu}>
                    Work
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Nav;
