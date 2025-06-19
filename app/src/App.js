// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Navigation from './Component/Navigation/Navigation';
import { Routes,Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/Signup" element={<Signup />}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
