import React from 'react';
import './styles/App.scss';

import Head from'./components/Head';
import Nav from'./components/Nav';
import Sidebar from'./components/Sidebar';
import Footer from './components/Footer';
import Home from'./pages/home';
import About from'./pages/about';
import Work from './pages/work';
import Contact from './pages/contact';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Head />
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
