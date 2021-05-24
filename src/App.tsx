import React from 'react';
import Navbar from "./componentes/navbar/Navbar";
import Header from "./componentes/header/Header";
import Portfolio from "./componentes/portfolio/Portfolio";
import About from "./componentes/about/About";
import Contact from "./componentes/contact/Contact";
import Footer from "./componentes/footer/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
