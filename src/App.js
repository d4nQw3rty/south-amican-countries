import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import Home from './components.js/Home';
import NavBar from './components.js/NavBar';
import './App.css';

const App = () => (
  <div>
    <NavBar />
    <Home />
  </div>
);

export default App;
