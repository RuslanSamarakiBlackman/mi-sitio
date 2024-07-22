import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Post from './components/Posts';

const App = () => (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/posts" element={<Post/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
  
  export default App;
  
