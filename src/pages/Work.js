import React from 'react';

import { Link } from 'react-router-dom';


function Work() {

  return (
    <div className="app">
      <section>
          <div className="project">
            <div className="description">
              <a href="https://date-fox.herokuapp.com/" target="blank">
                <h2>Date Fox</h2>
              </a>
                <p>
                  Login and choose Munich as your City, then a Museum tour, a Dinner, a Bar and enjoy your date experience.
                </p>
                <p>
                  • Languages: Ruby on Rails, Javascript, HTML, CSS,
                  • Databases: MySQL, Postgre SQL
                  • Client-Side: Bootstrap, JQuery
                  • Architecture: RESTful API's, MVC, AJAX
                </p>
            </div>
          </div>
          <div className="project">
            <div className="description">
              <a href="https://garden-fox.herokuapp.com/" target="blank">
                <h2>Garden Fox</h2>
              </a>
                <p>
                  Find your dream garden with Garden Fox
                </p>
                <p>
                  • Languages: Ruby on Rails, Javascript, HTML, CSS,
                  • Databases: MySQL, Postgre SQL
                  • Client-Side: Bootstrap, JQuery
                  • Architecture: RESTful API's, MVC, AJAX
                </p>
            </div>
          </div>
          <div className="project">
            <div className="description">
              <Link to="/">
                <h2>Gsap Page</h2>
              </Link>
                <p>
                  • Languages: Ruby on Rails, Javascript, HTML, CSS,
                  • Databases: MySQL, Postgre SQL
                  • Client-Side: Bootstrap, JQuery
                  • Architecture: RESTful API's, MVC, AJAX
                </p>
            </div>
          </div>
          <div className="project">
            <div className="description">
              <Link to="/">
                <h2>Single page app</h2>
              </Link>
                <p>
                  Login first and choose Munich as your City for a Dinner, a Bar, a Museum and enjoy your experience.
                  • Languages: Javascript, HTML, CSS,
                  • Databases: MySQL, Postgre SQL
                  • Client-Side: React, Bootstrap, JQuery
                  • Architecture: RESTful API's, MVC, AJAX
                </p>
            </div>
          </div>
          <div className="project">
            <div className="description">
              <Link to="/">
                <h2>Pogressiv web app</h2>
              </Link>
                <p>
                  Login first and choose Munich as your City for a Dinner, a Bar, a Museum and enjoy your experience.
                  • Languages: Javascript, HTML, CSS,
                  • Databases: MySQL, Postgre SQL
                  • Client-Side: React, Bootstrap, JQuery
                  • Architecture: RESTful API's, MVC, AJAX
                </p>
            </div>
          </div>
      </section>
    </div>
  );
}

export default Work;
