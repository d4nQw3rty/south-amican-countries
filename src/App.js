import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './components.js/Home';
import NavBar from './components.js/NavBar';
import { fetchCountries } from './redux/reducer/countriesSlice';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  dispatch(fetchCountries());
  return (
    <>
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
