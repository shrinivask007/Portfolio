import React from 'react';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import {Contact } from "./components/Contact/Contact";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Skills/>
      <Projects/>
      <Contact />
    </div>
  );
}

export default App;
