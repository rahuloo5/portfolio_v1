import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

const GlobalStyles = createGlobalStyle`
  *, 
  *:before, 
  *:after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.4rem;
    font-family: sans-serif;
    background-color: #000;
    background-color: #110421;
  }

  h1{
    font-size: 70px;
    font-weight: 600;
  }
`;

const App = () => {
    return (
        <>
            <GlobalStyles />
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </Router>
        </>
    );
};

export default App;
