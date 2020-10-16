import React from 'react';
import './App.css';
import { Parallax } from "react-parallax"
import Navigation from "./Navigation";
import Header from "./Header";
import About from "./About"

function App() {
  return (
    <div>
    <Navigation />
    <Header />
    <About />
    </div>
  );
}

export default App;
