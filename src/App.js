import logo from "./logo.svg";
import "./App.css";

import { Button } from "antd";
import React from "react";

import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <React.Fragment>
      <Home />
      <Header />
      <About />
      <Blog />
      <Portfolio />
      <Contact />
    </React.Fragment>
  );
}

export default App;
