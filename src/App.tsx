import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SectionDivider } from './components/SectionDivider';
import { Pillars } from './components/Pillars';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Hero />
      </div>
      <SectionDivider />
      <div className="container">
        <Pillars />
      </div>
    </div>
  );
}

export default App;
