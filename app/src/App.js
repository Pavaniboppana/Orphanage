// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Navigation from './Component/Navigation/Navigation';
import { Routes,Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import Footer from './Component/Footer/Footer';
import Contact from './Component/Footer/Contact';
import Faq from './Component/Footer/Faq';
import About from './Component/Home/About';
import Blog from './Component/Footer/Blog';
import Food from './Component/Food/Food';
import Career from './Component/Home/Career';

function App() {
  return (
    <>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/faq" element={<Faq />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/food" element={<Food />}></Route>
      <Route path="/career" element={<Career />}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
