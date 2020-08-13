import React from 'react';
import './styles/App.scss';

import Nav from'./components/Nav';
import Sidebar from'./components/Sidebar';
import Footer from './components/Footer';
import Home from'./pages/Home';
import About from'./pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Sidebar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/work" component={Work} />
              <Route path="/contact" component={Contact} />
            </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
