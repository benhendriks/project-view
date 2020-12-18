import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Work from "./pages/work";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Head from "./components/Head";
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Head />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/work" exact>
            <Work />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
