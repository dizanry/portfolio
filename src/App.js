import React from 'react';
import './App.css';
import "rbx/index.css";

import Header from './componets/Header';
import Ads from './componets/Ads';
import Cards from './componets/cards';
import About from './componets/about';
import Portfolio from "./componets/portfolio";
import Footer from "./componets/footer";




function App() {
  return (
      <div className='App'>
        <Header />
        <Ads />
          <Cards />
          <About />
          <Portfolio />
          <Footer />

      </div>

  );
}

export default App;