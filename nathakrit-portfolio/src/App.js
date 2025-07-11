import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Cursor from './components/Cursor';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';
import ScrollIndicator from './components/ScrollIndicator';
import GitHubContributions from './components/GitHubContributions';
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    background-color: #0A192F;
    color: #E0E0E0; /* Slightly lighter white */
    line-height: 1.6;
    letter-spacing: 0.03em;
  }
`;

function App() {
  return (
    <Preloader>
      <GlobalStyle />
      <ScrollIndicator />
      <Cursor />
      <Navbar />
      <Home id="home" />
      <Services id="services" />
      <Portfolio id="portfolio" />
      <GitHubContributions id="github-contributions" username="deknaew2582" />
      <About id="about" />
      <Contact id="contact" />
      <Footer />
      <ScrollToTopButton />
    </Preloader>
  );
}

export default App;